package database

import (
	"database/sql"
	"fmt"
)

/*
Return a list of teacher
*/
func GetTeachers(db *sql.DB) ([]Teacher, error) {
	result := []Teacher{}
	rows, err := db.Query("SELECT teacher_id, firstname, lastname, sector, module FROM teacher")
	if err != nil {
		return nil, fmt.Errorf("db.Query: %v", err)
	}
	for rows.Next() {
		teacher := Teacher{}
		if err := rows.Scan(&teacher.TeacherID, &teacher.FirstName, &teacher.LastName, &teacher.Sector, &teacher.Module); err != nil {
			return nil, fmt.Errorf("rows.Scan: %v", err)
		}
		result = append(result, teacher)
	}
	return result, nil
}
