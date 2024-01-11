package database

import (
	"database/sql"
)

func CreatePoll(db *sql.DB, name string, description string, idTeacher int) error {
	_, err := db.Exec("INSERT INTO poll (name, description, id_teacher) VALUES (?, ?, ?)", name, description, idTeacher)
	if err != nil {
		return err
	}
	return nil
}
