package database

import (
	"crypto/sha256"
	"database/sql"
	"encoding/base64"
	"fmt"
)

func Login(db *sql.DB, mail string, password string) (string, bool, error) {
	h := sha256.New()
	h.Write([]byte(password))
	result := 0
	row := db.QueryRow("SELECT COUNT(*) FROM user WHERE mail=? AND hash=?", mail, fmt.Sprintf("%x", h.Sum(nil)))
	if err := row.Scan(&result); err != nil {
		return "", false, fmt.Errorf("row.Scan(&result): %v", err)
	}
	if result == 0 {
		return "{\"error\": \"invalid credentials\"}", false, nil
	}
	return fmt.Sprintf("{\"token\":\"%s\"}", base64.StdEncoding.EncodeToString([]byte(mail))), true, nil
}
