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
	rows, err := db.Query("SELECT teacher_id, firstname, lastname, sector, module FROM teacher") //selects specific columns and store the result in "rows"
	if err != nil {
		return nil, fmt.Errorf("db.Query: %v", err) //for errors during the exec of the SQL query,
	}
	for rows.Next() { // Next : loop which iterates as long as there are more rows to be processed.
		teacher := Teacher{}
		if err := rows.Scan(&teacher.TeacherID, &teacher.FirstName, &teacher.LastName, &teacher.Sector, &teacher.Module); err != nil {
			return nil, fmt.Errorf("rows.Scan: %v", err)
		}
		result = append(result, teacher) // put the teacher in the result
	}
	return result, nil
}
