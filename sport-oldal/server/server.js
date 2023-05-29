const PORT =5000

const express = require('express')
const app = express()
const morgan =require("morgan");
const cors = require("cors");
const pool = require('./db')

app.use(cors());

app.use(express.json());

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello Afp 2-es csoport");
  
})
//visszaadja az összes usert aki az adatbázisban van // müködik, tesztelte: Lecza Tamás 05.29

app.get("/api/v1/getalluser", async (req,res) => {
    try {
        const result = await pool.query("SELECT * FROM users;")
        console.log(result);
        res.status(200).json(
        result.rows
        
    )
    } catch (err) {
        console.log(err);
    }
    
})

//visszaad egy usert, müködik, tesztelte: Lecza Tamás 05.29
app.get("/api/v1/oneuser/:id", async (req,res) => {
    console.log(req.params.id);
    try {
        const result = await pool.query(
            "SELECT * FROM users where iduser = $1 ", [req.params.id]);

            res.status(200).json(
            result.rows[0]
            );
    } catch (err) {
        console.log(err.message);
    }
    
})

// új felhasználó hozzáadaása az adatbázishoz müködik: tesztelte: Lecza Tamás 05.29

app.post("/api/v1/adduser", async (req, res) => {
    
    var date_time = new Date();
    console.log(date_time);
    const newUser = await pool.query(
        "INSERT INTO users (user_Szem_Szam ,user_Nev ,user_szul_ido ,user_felhasznalo_nev ,jelszo ,e_mail ,reg_datum ,user_role ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)" , 
            [req.body.userSzemSzam, 
            req.body.user_Nev, req.body.user_szul_ido,
            req.body.user_felhasznalo_nev,req.body.jelszo,
            req.body.e_mail,date_time,
            req.body.user_role]);
    res.status(201).json({
        status: date_time
    });
    
})

// update user // tesztelni!

app.put("/api/v1/updateuser/:id", async (req,res) => {
    try {
        const update = await pool.query(
            "UPDATE users SET user_Szem_Szam = $1,user_Nev = $2,user_szul_ido = $3,user_felhasznalo_nev = $4,jelszo = $5,e_mail = $6,reg_datum = $7,user_role = $8 where id = $10 returning *",
            [req.body.user_Nev, req.body.user_szul_ido,
                req.user_felhasznalo_nev,req.body.jelszo,
                req.body.e_mail,req.body.reg_datum,
                req.body.user_role,req.body.id]
        );
        res.status(200).json({
                status: "siker",
                data: {
                    user: update.rows[0],
                },
            });
    } catch (err) {
        console.log(err.message)
    }
    
});
// update user // tesztelni!
app.delete("/api/v1/delusers/:id", async (req,res) => {
    try {
        const result = await pool.query("DELETE FROM users where iduser = $1 ", [req.params.id]);
        res.status(204).json({
            status:"siker"
        })
    } catch (err) {
        console.log(err.message)
    }
    
})
// Szöveg apik Hozzáad egy szöveget az adatbázisba !! 
//Müködik: Lecza Tamás 05.29
app.post("/api/v1/addtext", async (req, res) => {
    console.log(req.body);
    var date_time = new Date();
try {
    const userid = 1;
    const ujSzoveg = await  pool.query(
        "INSERT INTO szoveg (szoveg_cim ,tartalom ,szoveg_feltolt_ideje ,user_iduser ) VALUES ($1,$2,$3,$4)" , [
            req.body.szoveg, req.body.tartalom, date_time, userid]);
            res.status(201).json({
                status: date_time
            })
} catch (err) {
    console.log(err.message)
}
})
// Visszaadja az összes szöveget az adatbázisból 
// Müködik: Lecza Tamás 05.29
app.get("/api/v1/getalltext", async (req,res) => {
    try {
        const result = await pool.query("SELECT * FROM szoveg;")
        console.log(result);
        res.status(200).json(
        result.rows
        
    )
    } catch (err) {
        console.log(err);
    }
    
})

//visszaad egy szöveget az adatbázisból, müködik, tesztelte: Lecza Tamás 05.29 
app.get("/api/v1/onetext/:id", async (req,res) => {
    console.log(req.params.id);
    try {
        const result = await pool.query(
            "SELECT * FROM szoveg where idSzoveg = $1 ", [req.params.id]);
            res.status(200).json(
            result.rows[0]
            );
    } catch (err) {
        console.log(err.message);
    }
    
})

// Video apik szöveggel !!
app.post("/api/v1/addvideo", async (req, res) => {
    console.log(req.body);
    var date_time = new Date();
try {
    const userid = 1;
    const szovegid = 2;
    const ujSzoveg = await  pool.query(
        "INSERT INTO video (videonev ,videonev , video_feltoltes_ideje , video_link, user_iduser, szoveg_idszoveg ) VALUES ($1,$2,$3,$4,$5,$6)" , [
            req.body.videonev, req.body.vieonev, date_time, req.body.video_link, userid, szovegid]);
            res.status(201).json({
                status: date_time
            })
} catch (err) {
    console.log(err.message)
}
})

app.listen(PORT, ()=> console.log( `server started on port ${PORT}`))