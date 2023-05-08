CREATE DATABASE applikacio;

CREATE TABLE IF NOT EXISTS Users (
  idUser Serial,
  User_Szem_Szam VARCHAR(20) NOT NULL,
  User_Nev VARCHAR(100) NOT NULL,
  User_Szul_Ido DATE NOT NULL,
  User_Felhasznalo_nev VARCHAR(10) NOT NULL,
  Jelszo VARCHAR(25) NOT NULL,
  e_mail VARCHAR(25) NOT NULL,
  Reg_Datum DATE NOT NULL,
  User_Role INT NOT NULL,
  PRIMARY KEY (idUser),
  UNIQUE (idUser),
  UNIQUE (User_Szem_Szam));

CREATE TABLE IF NOT EXISTS Szoveg (
  idSzoveg Serial,
  Szoveg_cim VARCHAR(45) NOT NULL,
  Tartalom TEXT NOT NULL,
  Szoveg_feltolt_ideje DATE NOT NULL,
  User_idUser INT NOT NULL,
  PRIMARY KEY (idSzoveg , User_idUser),
  UNIQUE (idSzoveg ),
  UNIQUE (Szoveg_feltolt_ideje),
  CONSTRAINT fk_Szoveg_User1
    FOREIGN KEY (User_idUser)
    REFERENCES users (idUser)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

CREATE TABLE IF NOT EXISTS Video (
  idVideo Serial,
  Videonev VARCHAR(45) NOT NULL,
  Video_Feltoltes_Ideje DATE NOT NULL,
  Video_link VARCHAR(45) NOT NULL,
  User_idUser INT NOT NULL,
  Szoveg_idSzoveg INT NOT NULL,
  PRIMARY KEY (idVideo, User_idUser),
  UNIQUE (idVideo),
  CONSTRAINT fk_Video_User1
    FOREIGN KEY (User_idUser)
    REFERENCES users (idUser)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_Video_Szöveg1
    FOREIGN KEY (Szoveg_idSzoveg)
    REFERENCES Szoveg (idSzoveg)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
