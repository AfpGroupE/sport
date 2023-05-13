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
//visszaadja az összes usert aki az adatbázisban van

app.get("/api/v1/getalluser", async (req,res) => {
    try {
        const result = await pool.query("SELECT * FROM users;")
        console.log(result);
        res.status(200).json({
        status: "siker",
        result: result.rows.length,
        data: {
            users : result.rows,
        }
        
    })
    } catch (err) {
        console.log(err);
    }
    
})

//visszaad egy usert
app.get("/api/v1/user/:id", async (req,res) => {
    console.log(req.params.id);
    try {
        const result = await pool.query(
            "SELECT * FROM users where iduser = $1 ", [req.params.id]);

            res.status(200).json({
                status: "siker",
                data: {
                    user: result.rows[0],
                },
            });
    } catch (err) {
        console.log(err.message);
    }
    
})

// új felhasználó hozzáadaása az adatbázishoz

app.post("/api/v1/adduser", async (req, res) => {

    console.log(req.body);
    
try {
    const newUser = await pool.query(
        "INSERT INTO users (user_Szem_Szam ,user_Nev ,user_szul_ido ,user_felhasznalo_nev ,jelszo ,e_mail ,reg_datum ,user_role ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) returning *" , [req.body.userSzemSzam, 
            req.body.user_Nev, req.body.user_szul_ido,
            req.user_felhasznalo_nev,req.body.jelszo,
            req.body.e_mail,req.body.reg_datum,
            req.body.user_role]);
    console.log(newUser)
    res.status(201).json({
        status: "siker",
        data: {
            user: newUser.rows[0],
        },
    });
    
} catch (err) {
    console.log(err.message)
}
})

// update user

app.put("/api/v1/users/:id", async (req,res) => {
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

app.delete("/api/v1/users/:id", async (req,res) => {
    try {
        const result = await pool.query("DELETE FROM users where iduser = $1 ", [req.params.id]);
        res.status(204).json({
            status:"siker"
        })
    } catch (err) {
        console.log(err.message)
    }
    
})

app.listen(PORT, ()=> console.log( `server started on port ${PORT}`))