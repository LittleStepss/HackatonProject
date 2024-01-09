CREATE TABLE user (
    mail VARCHAR(100) PRIMARY KEY NOT NULL,
    status VARCHAR(100) NOT NULL,
    hash VARCHAR(255) NOT NULL
);

CREATE TABLE teacher (
    teacher_id INT PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    sector VARCHAR(255) NOT NULL,
    module VARCHAR(255) NOT NULL
);

CREATE TABLE poll (
    poll_id INT PRIMARY KEY AUTO_INCREMENT,
    fk_user_mail VARCHAR(100),
    fk_id_teacher INT,
    score INT NOT NULL,
    comment TEXT NOT NULL,
    report BOOLEAN,
    FOREIGN KEY (fk_user_mail) REFERENCES user(mail),
    FOREIGN KEY (fk_id_teacher) REFERENCES teacher(teacher_id)
);

