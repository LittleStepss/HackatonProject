package database

import "database/sql"

func GetTeachers(db *sql.DB) {
	db.Query("Here is the list of Teachers :")
}
