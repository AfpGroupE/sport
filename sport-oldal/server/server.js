const PORT = 5000 ?? 8000

const express = require('express')
const app = express()
const pool = require('./db')

app.get("/", (req, res) => {
  res.send("Hello Afp 2-es csoport")
})

// get all adatbázis dolgok

app.get('/users') , async (req, res) => {
    try {
        const felhasznalok = await pool.query('SELECT * FROM users');
        res.json(felhasznalok.rows)
    } catch (err) {
        console.error(error)
    }
}

app.listen(PORT, ()=> console.log( `server started on port ${PORT}`))