const PORT = 5000 ?? 8000

const express = require('express')
const app = express()
const pool = require('./db')

/* Ez a teszt script
app.get("/", (req, res) => {
    res.send("Hello Afp 2-es csoport")
})
*/
// get all adatbázis dolgok

app.get('/applikacio') , async (req, res) => {
    try {
        const felhasznalok = await pool.query('SELECT * FROM Users');
        res.json(applikacio.rows)
    } catch (err) {
        console.error(error)
    }
}

app.listen(PORT, ()=> console.log( `server started on port ${PORT}`))