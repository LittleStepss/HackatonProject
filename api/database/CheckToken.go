package database

import (
	"database/sql"
	"encoding/base64"
	"fmt"
)

func CheckToken(db *sql.DB, apiToken string) (bool, error) {
	clearToken, err := base64.StdEncoding.DecodeString(apiToken)
	if err != nil {
		return false, fmt.Errorf("base64.StdEncoding.DecodeString: %v", err)
	}
	result := 0
	row := db.QueryRow("SELECT COUNT(*) FROM user WHERE mail=?", string(clearToken))
	if err := row.Scan(&result); err != nil {
		return false, fmt.Errorf("row.Scan(&result): %v", err)
	}
	if result != 0 {
		return true, nil
	}
	return false, nil
}
