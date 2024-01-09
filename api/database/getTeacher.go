package database

import "database/sql"

func GetTeachers(db *sql.DB) {
	db.Exec("Here is the list of Teachers :")
}
