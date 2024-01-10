package database

type Teacher struct {
	TeacherID int    `json:"teacher_id"`
	FirstName string `json:"firstname"`
	LastName  string `json:"lastname"`
	Sector    string `json:"sector"`
	Module    string `json:"module"`
}
