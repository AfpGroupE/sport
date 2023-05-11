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
/* app.post("/adduser", async (req, res) => {
try {
    console.log(req.body);
} catch (err) {
    console.log(err.message)
}
})
*/
app.get('/allusers' , async (req, res) => {
    try {
        const felhasznalok = await pool.query('SELECT * FROM users;');
        res.json(felhasznalok.rows)
    } catch (err) {
        console.error(err)
    }
})

app.listen(PORT, ()=> console.log( `server started on port ${PORT}`))