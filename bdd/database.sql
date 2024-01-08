CREATE DATABASE student;
use student;

CREATE TABLE students(
    StudentID int not null AUTO_INCREMENT,
    FirstName varchar(50) NOT NULL,
    Surname varchar(50) NOT NULL,
    PRIMARY KEY (StudentID)
);

