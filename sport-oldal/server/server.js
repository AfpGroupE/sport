const PORT = process.env.PORT ?? 8000

const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree","userFour"]})
})

app.listen(PORT, ()=> console.log( `server started on port ${PORT}`))