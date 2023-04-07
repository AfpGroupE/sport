## 1. Rendszer célja
## 2. Projekterv
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
