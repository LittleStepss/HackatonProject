package database

import (
	"database/sql"
)

func Beyonce(db *sql.DB, fk_user_mail string, comment string, score string, fk_id_teacher string) error {
	_, err := db.Exec("INSERT INTO poll(fk_user_mail, comment, score, fk_id_teacher) VALUES(?, ?, ?, ?)", fk_user_mail, comment, score, fk_id_teacher)
	if err != nil {
		return err
	}
	return nil
}
