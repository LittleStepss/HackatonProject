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

-- Password is the mail address
insert into user(mail, status, hash) values("emma.petit@ynov.com", "student", "3e0f80bd6a34b0206ffa5a66d2a5f5ffe13697783621db3d523e3597617db25e");
insert into user(mail, status, hash) values("lucas.dupont@ynov.com", "student", "93ddae0009abc120c80d0488628077ad3bc6869ea85ddc367368c47418cef44d");
insert into user(mail, status, hash) values("jade.garcia@ynov.com", "student", "3e271b6547b4d54cc2ab23aba9f2ff13c20f0782d0e7de68e3c5c1d456fd976f");
insert into user(mail, status, hash) values("hugo.leroy@ynov.com", "admin", "49abfcad4bf7cbce9e3efc256b47f9eb18276bf2490678bab5a2b59fa03d4407");
insert into user(mail, status, hash) values("enzo.sanchez@ynov.com", "admin", "b9a1b934bd99f2435b33f89149122100b3ebc4d2f86643481c7f1009d8de0ad7");


INSERT INTO teacher(firstname, lastname, sector, module) 
VALUES 
    ('Noa', 'Martin', 'informatique', 'python'),
    ('Jean-Claude', 'Dus', 'Relationnel', 'Drague'),
    ('Francois', 'Pignon', 'Relationnel', 'Alloteur'),
    ('Beyonce', 'Knowles', 'informatique', 'NextJs'),
    ('Alexis', 'bogoss', 'informatique', 'Golang'),
    ('Lucas', 'Pastor', 'informatique', 'linux'),
    ('Stephane', 'Super', 'informatique', 'le Genialisme'),
    ('Rachida', 'Dati', 'informatique', 'Culture generale'),
    ('Gabriel', 'Attal', 'informatique', 'Tronc Commun'),
    ('Gerard ', 'Depardieu', 'Relationnel', 'Cyberharcelement'),
    ('Philippe', 'Boxho', 'informatique', 'Administration systeme'), 
    ('Tom', 'Jegou', 'informatique', 'Mepriscript'),
    ('Corentin', 'Hournass', 'informatique', 'GLPI'),
    ('Fabien ', 'Roux', 'informatique', 'Reseaux'),
    ('Johann', 'Scourzic', 'informatique', 'Administration Windows'),
    ('Julien', 'Sosthene', 'informatique', 'Multitask Master'),
    ('Vianney', 'Selosse', 'informatique', 'Cyber résilience'),
    ('Sophie', 'Dubois', 'informatique', 'c#');

