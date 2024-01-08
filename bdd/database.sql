CREATE TABLE Users (
    id_user INT PRIMARY KEY AUTO_INCREMENT,
    Firstname VARCHAR(255) NOT NULL,
    Surname VARCHAR(255) NOT NULL,
    Classe VARCHAR(255) NOT NULL,
    Sector VARCHAR(255) NOT NULL,
    Condition ENUM('Admin', 'Etudiant') NOT NULL,
    UserPassword VARCHAR(255) NOT NULL,
    Username VARCHAR(255) NOT NULL
);


CREATE TABLE Teacher (
    id_teacher INT PRIMARY KEY AUTO_INCREMENT,
    FirstnameTeacher VARCHAR(255) NOT NULL,
    SurnameTeacher VARCHAR(255) NOT NULL,
    Sector VARCHAR(255) NOT NULL,
    Module VARCHAR(255) NOT NULL
);


CREATE TABLE Poll (
    id_poll INT PRIMARY KEY AUTO_INCREMENT,
    id_user INT,
    id_teacher INT,
    note INT NOT NULL,
    avis TEXT NOT NULL,
    Report BOOLEAN,
    FOREIGN KEY (id_user) REFERENCES User(id_user),
    FOREIGN KEY (id_teacher) REFERENCES Teacher(id_teacher)
);

