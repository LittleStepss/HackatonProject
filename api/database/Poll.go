package database

type Poll struct {
	PollID    int    `json:"poll_id"`
	UserMail  string `json:"fk_user_mail"`
	TeacherID int    `json:"fk_id_teacher"`
	Score     int    `json:"score"`
	Comment   string `json:"comment"`
	Report    bool   `json:"report"`
}
