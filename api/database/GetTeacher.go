package database

import (
	"database/sql"
	"fmt"
)

func GetTeacher(db *sql.DB, teacherId string) (*Teacher, error) {
	row := db.QueryRow("SELECT teacher_id, firstname, lastname, sector, module FROM teacher WHERE teacher_id=?", teacherId)
	result := Teacher{}
	if err := row.Scan(&result.TeacherID, &result.FirstName, &result.LastName, &result.Sector, &result.Module); err != nil {
		return nil, fmt.Errorf("row.Scan(&result.TeacherID, &result.FirstName, &result.LastName, &result.Sector, &result.Module): %v", err)
	}
	return &result, nil
}
