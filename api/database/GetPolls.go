package database

import (
	"database/sql"
	"fmt"
)

func GetPolls(db *sql.DB, teacherId string) ([]Poll, error) {
	rows, err := db.Query("SELECT fk_user_mail, score, comment, poll_id, fk_id_teacher FROM poll WHERE fk_id_teacher=?", teacherId)
	if err != nil {
		return nil, fmt.Errorf("db.Query: %v", err)
	}
	result := []Poll{}
	for rows.Next() {
		poll := Poll{}
		if err := rows.Scan(&poll.UserMail, &poll.Score, &poll.Comment, &poll.PollID, &poll.TeacherID); err != nil {
			return nil, fmt.Errorf("rows.Scan(&poll.UserMail, &poll.Score, &poll.Comment): %v", err)
		}
		result = append(result, poll)
	}
	return result, nil
}
