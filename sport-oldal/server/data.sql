CREATE DATABASE app;

CREATE TABLE IF NOT EXISTS `mydb`.`User` (
  `idUser` INT NOT NULL AUTO_INCREMENT,
  `User_Szem_Szam` VARCHAR(20) NOT NULL,
  `User_Csalad_Nev` VARCHAR(20) NOT NULL,
  `User_Utonev` VARCHAR(15) NOT NULL,
  `User_Utonev2` VARCHAR(45) NULL,
  `User_Szul_Ido` DATETIME NOT NULL,
  `User_Felhasznalo_nev` VARCHAR(10) NOT NULL,
  `Jelszo` VARCHAR(25) NOT NULL,
  `e-mail` VARCHAR(25) NOT NULL,
  `Reg_Datum` DATE NOT NULL,
  `User_Role` INT NOT NULL,
  PRIMARY KEY (`idUser`),
  UNIQUE INDEX `idDolgozó_UNIQUE` (`idUser` ASC) VISIBLE,
  UNIQUE INDEX `Dolg_Szem_Szám_UNIQUE` (`User_Szem_Szam` ASC) VISIBLE)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `mydb`.`Szoveg` (
  `idSzoveg` INT NOT NULL AUTO_INCREMENT,
  `Szoveg_cim` VARCHAR(45) NOT NULL,
  `Tartalom` LONGTEXT NOT NULL,
  `Szoveg_feltolt_ideje` DATETIME NOT NULL,
  `User_idUser` INT NOT NULL,
  PRIMARY KEY (`idSzoveg`, `User_idUser`),
  UNIQUE INDEX `idSzöveg_UNIQUE` (`idSzoveg` ASC) VISIBLE,
  UNIQUE INDEX `Szöveg_feltölt_ideje_UNIQUE` (`Szoveg_feltolt_ideje` ASC) VISIBLE,
  INDEX `fk_Szöveg_User1_idx` (`User_idUser` ASC) VISIBLE,
  CONSTRAINT `fk_Szöveg_User1`
    FOREIGN KEY (`User_idUser`)
    REFERENCES `mydb`.`User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `mydb`.`Video` (
  `idVideo` INT NOT NULL AUTO_INCREMENT,
  `Videonev` VARCHAR(45) NOT NULL,
  `Video_Feltoltes_Ideje` DATETIME NOT NULL,
  `Video_link` VARCHAR(45) NOT NULL,
  `User_idUser` INT NOT NULL,
  `Szoveg_idSzoveg` INT NOT NULL,
  PRIMARY KEY (`idVideo`, `User_idUser`),
  UNIQUE INDEX `idVideo_UNIQUE` (`idVideo` ASC) VISIBLE,
  INDEX `fk_Video_User1_idx` (`User_idUser` ASC) VISIBLE,
  INDEX `fk_Video_Szöveg1_idx` (`Szoveg_idSzoveg` ASC) VISIBLE,
  CONSTRAINT `fk_Video_User1`
    FOREIGN KEY (`User_idUser`)
    REFERENCES `mydb`.`User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Video_Szöveg1`
    FOREIGN KEY (`Szoveg_idSzoveg`)
    REFERENCES `mydb`.`Szoveg` (`idSzoveg`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;