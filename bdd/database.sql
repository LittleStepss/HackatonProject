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
    fk_user_mail VARCHAR(100) NOT NULL,
    fk_id_teacher INT NOT NULL,
    score INT NOT NULL,
    comment TEXT NOT NULL,
    report BOOLEAN,
    FOREIGN KEY (fk_user_mail) REFERENCES user(mail),
    FOREIGN KEY (fk_id_teacher) REFERENCES teacher(teacher_id)
);

CREATE TABLE reported_polls (
    reported_poll_id INT PRIMARY KEY AUTO_INCREMENT,
    fk_poll_id INT NOT NULL,
    fk_user_mail VARCHAR(100) NOT NULL,
    fk_user_status VARCHAR(100) NOT NULL,
    fk_poll_comment TEXT NOT NULL,
    FOREIGN KEY (fk_poll_id) REFERENCES poll(poll_id),
    FOREIGN KEY (fk_user_mail) REFERENCES user(mail),
    FOREIGN KEY (fk_user_status) REFERENCES user(status),
    FOREIGN KEY (fk_poll_comment) REFERENCES poll(comment)
);

-- Password is the mail address
insert into user(mail, status, hash) values("emma.petit@ynov.com", "student", "3e0f80bd6a34b0206ffa5a66d2a5f5ffe13697783621db3d523e3597617db25e");
insert into user(mail, status, hash) values("lucas.dupont@ynov.com", "student", "93ddae0009abc120c80d0488628077ad3bc6869ea85ddc367368c47418cef44d");
insert into user(mail, status, hash) values("jade.garcia@ynov.com", "student", "3e271b6547b4d54cc2ab23aba9f2ff13c20f0782d0e7de68e3c5c1d456fd976f");
insert into user(mail, status, hash) values("hugo.leroy@ynov.com", "admin", "49abfcad4bf7cbce9e3efc256b47f9eb18276bf2490678bab5a2b59fa03d4407");
insert into user(mail, status, hash) values("enzo.sanchez@ynov.com", "admin", "b9a1b934bd99f2435b33f89149122100b3ebc4d2f86643481c7f1009d8de0ad7");

INSERT INTO teacher(firstname, lastname, sector, module) 
VALUES 
    ('Noa', 'Martin', 'informatique', 'python'),
    ('Pierre', 'Lefevre', 'informatique', 'php'),
    ('Sophie', 'Dubois', 'informatique', 'c#');

INSERT INTO reported_polls(fk_user_mail, fk_user_status, fk_poll_comment) 
VALUES 
    ('lucas.dupont@ynov.com', 'student', 'trop debile le prof'),
    ('jade.garcia@ynov.com', 'student', 'hallo guten tag'),
    ('hugo.leroy@ynov.com', 'admin', 'Abusé trop naze '), /*admin can be reported*/
    ('emma.petit@ynov.com', 'student', 'je me suis endormis tellement il est nul et bête');