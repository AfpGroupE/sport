const PORT = process.env.PORT ?? 8000

const express = require('express')
const app = express()

/* Ez a teszt script
app.get("/", (req, res) => {
    res.send("Hello Afp 2-es csoport")
})
*/
// get all adatbázis dolgok

app.get('/app') , (req, res) => {
    try {
        
    } catch (err) {
        console.error(error)
    }
}

app.listen(PORT, ()=> console.log( `server started on port ${PORT}`))