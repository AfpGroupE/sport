const PORT =5000

const express = require('express')
const app = express()
const cors = require("cors");
const pool = require('./db')

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Afp 2-es csoport");
  
})

// get all adatbázis dolgok
// új felhasználó hozzáadaása az adatbázishoz
app.post("/adduser", async (req, res) => {
    const userSzemSzam = 'aléskdfjasd';
    const user_Nev = 'Ocb';
    const user_szul_ido = '1987.01.01';
    const user_felhasznalo_nev = 'Tomika';
    const jelszo = 'hali';
    const e_mail = 't@t.com';
    const reg_datum = '1234.01.01';
    const user_role = 3;
try {
    //const {ujfelhasznalo} = req.body;
    
    const newUser = await pool.query(
        "INSERT INTO users (user_Szem_Szam ,user_Nev ,user_szul_ido ,user_felhasznalo_nev ,jelszo ,e_mail ,reg_datum ,user_role ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)" , [userSzemSzam,user_Nev,user_szul_ido,user_felhasznalo_nev,jelszo,e_mail,reg_datum,user_role]
    )

    res.json(newUser);
} catch (err) {
    console.log(err.message)
}
})

app.get('/allusers' , async (req, res) => {
    console.log(process.env)
    try {
        const felhasznalok = await pool.query('SELECT * FROM users;');
        res.json(felhasznalok.rows)
    } catch (err) {
        console.error(err)
    }
})

app.listen(PORT, ()=> console.log( `server started on port ${PORT}`))