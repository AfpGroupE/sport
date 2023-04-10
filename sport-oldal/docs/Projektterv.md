## 1. Rendszer célja
## 2.Projektterv
### 2.1 Projektszerepkörök, felelőségek

Scrum master: Schmidt György

Product owner: Horváth Dávid

Üzleti szereplők:
 - Megrendelő: Kiss János edzőterem tulajdonos.

### 2.2 Projektmunkások és felelőségeik

Frontend: (Feladatuk weboldal kinézetének az elkészítése, illetve a megrendelő által igényelt funkciók megvalósítása)
- Horváth Dávid 
- Schmidt György

Backend: (Feladatuk az adatbázis kialakítása illetve abból az adatok kiszolgálása a frontend számára)
- Vas Ádám
- Lecza Tamás Zoltán
	
Tesztelés:
- Horváth Dávid 
- Schmidt György
- Vas Ádám
- Lecza Tamás Zoltán
	
### 2.3 Ütemterv

||Funkció / Story | Feladat / Task | Prioritás | Becslés | Aktuális becslés | Elteltidő | Hátralévő idő ||
|-|---------------|----------------|-----------|---------|------------------|-----------|---------------|-|
||Követelmény specifikáció|        |         0 |      12 |               12 |        12 |             0 ||             
||Funkcionális specifikáció|       |         0 |      12 |               12 |        12 |             0 ||
||Rendszerterv|                    |           |      20 |               20 |        16 |             4 ||
||Adattárolás|Adatmodell megtervezése|       0 |       4 |                4 |         4 |             0 ||
||Adattárolás|Adatbázis megvalósítása a szerveren|  1 |  	  2 |                2 |         0 |             2 ||
||Backend|Route & controllers elkészítése|        	2 |      16 |               16 |         0 |            16 ||
||Backend|Adatbázis kapcsolat megvalósítása|        2 |      12 |               12 |         0 |            12 ||
||Backend|Adatfeladolgozó funkciók megvalósítása|   2 |      12 |               12 |         0 |            12 ||
||Website|Képernyőtervek elkészítése|        		2 |       8 |                8 |         0 |             8 ||
||Website|Prototípus elkészítése|            		2 |       8 |                8 |         0 |             8 ||
||Website|Adatbázis létrehozása|             		2 |       8 |                8 |         0 |             8 ||
||Website|Menüstruktúra elkészítése|         		2 |       8 |                8 |         0 |             8 ||
||Website|Kezdőlap funkciók elkészítése|      		2 |       8 |                8 |         0 |             8 ||
||Website|Felhasználói felület elkészítése|      	2 |       8 |                8 |         0 |             8 ||
||Website|Alkalmazottak felület elkészítése|      	2 |       8 |                8 |         0 |             8 ||
||Website|Adminisztrátori felület elkészítése|      2 |       8 |                8 |         0 |             8 ||
||Website|Tesztelés|                         		2 |      16 |               16 |         0 |            16 ||

### 2.4 Mérföldkövek

- A prototipus bemutatása
- Az elkészült szoftver átadása 
## 5 Funkcionális Terv

### 5.1 Rendszer szereplői

A rendszerben két nagyobb csoport van jelen. Az egyik a bérlettel rendelkezők sportolók csoportja, a másik az adminisztrációt végzők csoportja.</br>
A sportolók igénybe veszik az edzőterem illetve a weboldal szolgáltatásait, a dolgozók a sportoló adatait regisztrálják, módosítják és törlik.
A rendszergazdai jogosultsággal rendelkezők új dolgozót képesek felvinni a rendszerbe, módosítani az eltárolt adatokat illetve törölni azokat.
Kezdetben a rendszergazda és a tulajdonos teljeskörű jogosultságot kapnak, amit később a tulajdonos módosíthat, tehát lesz olyan dolgozó aki szintnén adminisztrátori
jogosultságot fog kapni. 


### 5.2 Rendszerhasználati esetek

![használati eset](https://github.com/AfpGroupE/sport/blob/main/sport-oldal/docs/flowchart_of_system_use_case.jpg)

### 5.3 Menühiearchiák
A weboldal bejelentkezés nélkül 4 menü lesz elérhető. Főoldal, kapcsolat, bejelentkezés, regisztráció. 
A rendszerbe való bejelentkezés után lesz látható a felhasználó által használható menürendszer.
A menüben 10 db gomb lesz kialakítva amelyre rákattintás után eltérő tartalom lesz megjelenítve. A menürendszer úgy lesz kialakítva, hogy 
a felhasználó annyi gombot fog látni amilyen jogköre van.
A rendszerünkben 3 jogkör lesz.</br>
-**Felhasználói jogkörrel rendelkező** Az a felhasználó aki csak felhasználói jogkörrel rendelkezik, azok a 10 menüpontból
csak 9-et fog elérni amelyek a következők: Főoldal,Galéria,Videók,Árlista,Étrendek,Edzéstervek,Hírek,Kapcsolat,Kijelentkezés.</br>
-**Dolgozói jogkörrel rendelkező** Dolgozói jogkörrel rendelkező személynek meg fog jelenni az előzőekben felsorolt 9 menü amely ki
lesz egészítve felhasználó regisztrálása menü, ahol lehetőség lesz új sportoló hozzáadása, sportoló törlése , sportoló adatainak módosítása illetve
sportoló keresése funkciók.</br>
-**Adminisztrátori jogkörrel rendelkező** Adminisztrátori bejelentkezés után a weboldal teljes menürendszre lesz elérhető. Neki meg fog jelenni egy 
munkatárs crude gomb, amelyre rákattintva lehetősége lesz új munkatárs hozzáadaása, munkatárs törlése, munkatárs adatatinak a módosítása illetve munkatárs 
keresése funkció.</br>

## 6. Fizikai környezet
Fronend felületet React, a backend felületet NodeJS biztosítja.

### 6.1 Vásárolt softwarekomponensek és külső rendszerek
Nincsenek vásárolt szoftverkomponensek. 

### 6.2 Hardver és hálózati topológia
- Az alkalmazás web platformra készül.
- Internet böngészőn keresztül érhető el a felhasználó felület.
- Szerverhez interneten keresztül lehet csatlakozni.  
 
### 6.3 Fizikai alrendszerek
- Webszerver: 80-as porton elérhető HTTP szolgáltatás 
- MongoDB adatbázis szerver
- Kliens gépek: a követelményeknek megfelelő internet böngésző futtatására alkalmas PC-k.

### 6.4 Fejlesztő eszközök
- Visual Studio Code
- Notepad++

### 6.5 Keretrendszer
- React
## 9.Adatbázisterv

**Sportolo egyedet** jellemzi:</br>
 idSportolo, ez az elsődleges kulcs,</br> 
 Szem_Szám,</br>
 Családnév,</br> 
 Utónév,</br>
 Utónév2,</br>
 Születési_idő,</br>
 Felhasználó_név,</br>
 Jelszó,</br>
 E_mail,</br>
 Reg_Datum,</br>
 Dolgozó_idDolgozó, ami idegen kulcs,</br>

**Dolgozó egyedet** jellemzi:</br>
 idDolgozó, ez az elsődleges kulcs</br>
 Dolg_Szem_Szám,</br>
 Dolg_Család_Név,</br>
 Dolg_Utónév,</br>
 Dolg_Utónév2,</br>
 Dolg_Szül_Idő,</br>
 Dolg_Jog_Szint,</br>
 
**Szöveg**</br>
 idSzöveg, ez az elsődleges kulcs</br>
 Szöveg_cím,</br>
 Tartalom,</br>
 Szöveg_feltölt_ideje,</br>
 Dolgozó_idDolgozó, ami idegen kulcs</br>
 
**Kép**</br>
 idKép, ez az elsődleges kulcs,</br>
 Képnév,</br>
 Kép_link,</br>
 Kép_Feltöltési_Ideje,</br>
 Dolgozó_idDolgozó ez idegen kulcs</br>
 
**Videó**</br>
 Videonév,</br>
 Video_link,</br>
 Video_Feltöltés_Ideje</br>
 Dolgozó_idDolgozó, ez idegen kulcs</br>
 
 ### 9.1 Logikai Adatmodell

 **Adatbázis séma**
 
 ![database_schema](https://github.com/AfpGroupE/sport/blob/main/sport-oldal/docs/sportoloAdatbazisSema.png)
