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

// update user // tesztelni tesztelve, működik 05.30 !

app.put("/api/v1/updateuser/:id", async (req,res) => {
    var date_time = new Date();
    try {
        const update = await pool.query(
            "UPDATE users SET user_Szem_Szam = $1, user_Nev = $2, user_szul_ido = $3, user_felhasznalo_nev = $4, jelszo = $5,e_mail = $6, reg_datum = $7, user_role = $8 where iduser = $9",
            [req.body.user_Szem_Szam, 
                req.body.user_Nev, req.body.user_szul_ido,
                req.body.user_felhasznalo_nev,req.body.jelszo,
                req.body.e_mail,date_time,
                req.body.user_role,req.params.id]
        );
        res.status(200).json({
                    user: update.rows[0]
            });
    } catch (err) {
        console.log(err.message)
    }
    
});
// delete user // tesztelni!
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
    const ujSzoveg = await  pool.query(
        "INSERT INTO szoveg (szoveg_cim ,tartalom ,szoveg_feltolt_ideje ,user_iduser ) VALUES ($1,$2,$3,$4)" , [
            req.body.szoveg, req.body.tartalom, date_time, req.body.user_iduser]);
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
// frissít egy szöveget, működik tesztelte: Lecza Tamás 05.29 
app.put("/api/v1/updatetext/:id", async (req,res) => {
    var date_time = new Date();
    try {
        const update = await pool.query(
            "UPDATE szoveg SET szoveg_cim = $1, tartalom = $2, szoveg_feltolt_ideje = $3, user_iduser = $4 where idSzoveg = $5",
            [req.body.szoveg_cim,req.body.tartalom,date_time,req.body.user_iduser,req.params.id]
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

// Video apik szöveggel !! 
// müködik, tesztelte: Lecza Tamás 05.29 
app.post("/api/v1/addvideo", async (req, res) => {
    console.log(req.body);
    var date_time = new Date();
try {
    const ujSzoveg = await  pool.query(
        "INSERT INTO video (videonev , video_feltoltes_ideje , video_link, user_iduser, szoveg_idszoveg ) VALUES ($1,$2,$3,$4,$5)" , [
            req.body.videonev, date_time, req.body.video_link, req.body.user_iduser, req.body.szoveg_szovegid]);
            res.status(201).json({
                status: date_time
            })
} catch (err) {
    console.log(err.message)
}
})

// visszaadja az összes videolinket az adatbázisból 
// müködik, tesztelte: Lecza Tamás 05.29
app.get("/api/v1/getallvideo", async (req,res) => {
    try {
        const result = await pool.query("SELECT * FROM video;")
        console.log(result);
        res.status(200).json(
        result.rows
        
    )
    } catch (err) {
        console.log(err);
    }
    
})
// visszad egy videolinket az adatbázisból 
// müködik, tesztelte: Lecza Tamás 05.29
app.get("/api/v1/onevideo/:id", async (req,res) => {
    console.log(req.params.id);
    try {
        const result = await pool.query(
            "SELECT * FROM video where idvideo = $1 ", [req.params.id]);

            res.status(200).json(
            result.rows[0]
            );
    } catch (err) {
        console.log(err.message);
    }
    
})
// frissít egy videot szöveggel, működik tesztelte: Lecza Tamás 05.30
app.put("/api/v1/updatevideo/:id", async (req,res) => {
    var date_time = new Date();
    try {
        const update = await pool.query(
            "UPDATE video SET videonev = $1, video_feltoltes_ideje = $2, video_link = $3, user_iduser = $4, szoveg_idSzoveg = $5 where idvideo = $6",
            [req.body.videonev,date_time,req.body.video_link,req.body.user_iduser,req.body.szoveg_idSzoveg,req.params.id]
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
// Video apik szöveg nelkül !! 
// hozzáad egy videolinek a szöveg nélküli adatbázishoz. Működik, tesztelte: Lecza Tamás 05.29 
app.post("/api/v1/addvideo/notext/", async (req, res) => {
    console.log(req.body);
    var date_time = new Date();
try {
    const userid = 1;
    const ujSzoveg = await  pool.query(
        "INSERT INTO video_szoveg_nelkul (videonev_szoveg_nelkul, video_feltoltes_ideje , video_link, user_iduser) VALUES ($1,$2,$3,$4)" , [
            req.body.videonev_szoveg_nelkul, date_time, req.body.video_link, userid]);
            res.status(201).json({
                status: date_time
            })
} catch (err) {
    console.log(err.message)
}
})

// visszaadja az összes videolinket a video_szoveg_nelkul adatbázisból 
// müködik, tesztelte: Lecza Tamás 05.29
app.get("/api/v1/getallvideo/notext", async (req,res) => {
    try {
        const result = await pool.query("SELECT * FROM video_szoveg_nelkul;")
        console.log(result);
        res.status(200).json(
        result.rows
        
    )
    } catch (err) {
        console.log(err);
    }
    
})
// visszad egy videolinket a video_szoveg_nelkul adatbázisból 
// müködik, tesztelte: Lecza Tamás 05.29
app.get("/api/v1/getonevideo/notext/:id", async (req,res) => {
    console.log(req.params.id);
    try {
        const result = await pool.query(
            "SELECT * FROM video where idvideo = $1 ", [req.params.id]);

            res.status(200).json(
            result.rows[0]
            );
    } catch (err) {
        console.log(err.message);
    }
    
})
// frissíti a video szöveg nélküli adatbázisát , működik tesztelve 05.30 Lecza Tamás Zoltán
app.put("/api/v1/updatevideo/notext/:id", async (req,res) => {
    var date_time = new Date();
    try {
        const update = await pool.query(
            "UPDATE video_szoveg_nelkul SET videonev_szoveg_nelkul = $1, video_feltoltes_ideje = $2, video_link = $3, user_iduser = $4 where idvideo_szoveg_nelkul = $5",
            [req.body.videonev_szoveg_nelkul,date_time,req.body.video_link,req.body.user_iduser,req.params.id]
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

// Kép apik szöveggel !! 
// müködik, tesztelte: Lecza Tamás 05.29 
app.post("/api/v1/addkep", async (req, res) => {
    console.log(req.body);
    var date_time = new Date();
try {
    const ujSzoveg = await  pool.query(
        "INSERT INTO kep (kepnev, kep_link , kep_feltoltes_ideje, user_iduser, szoveg_idszoveg) VALUES ($1,$2,$3,$4,$5)" , [
            req.body.kepnev, req.body.kep_link, date_time , req.body.user_iduser, req.body.szoveg_idszoveg]);
            res.status(201).json({
                status: date_time
            })
} catch (err) {
    console.log(err.message)
}
})


// visszaadja az összes kép adatát az adatbázisból működik: Tesztelve 05.30 Lecza Tamás
app.get("/api/v1/getallkep", async (req,res) => {
    try {
        const result = await pool.query("SELECT * FROM kep;")
        console.log(result);
        res.status(200).json(
        result.rows
        
    )
    } catch (err) {
        console.log(err);
    }
    
})

// visszaadja egy kép adatát az adatbázisból. működik: Tesztelve 05.30 Lecza Tamás

app.get("/api/v1/onekep/:id", async (req,res) => {
    console.log(req.params.id);
    try {
        const result = await pool.query(
            "SELECT * FROM video where idvideo = $1 ", [req.params.id]);

            res.status(200).json(
            result.rows[0]
            );
    } catch (err) {
        console.log(err.message);
    }
    
})
// frissíti egy kép adatát // tesztelve 05.30 Lecza Tamás

app.put("/api/v1/updatekep/:id", async (req,res) => {
    var date_time = new Date();
    try {
        const update = await pool.query(
            "UPDATE kep SET kepnev = $1, kep_link = $2, kep_feltoltes_ideje = $3, user_iduser = $4, szoveg_idszoveg = $5 where idkep = $6",
            [req.body.kepnev,req.body.kep_link,date_time,req.body.user_iduser,req.body.szoveg_idszoveg,req.params.id]
        );
        res.status(200).json({
                    user: update.rows[0]
            });
    } catch (err) {
        console.log(err.message)
    }
    
});

// hozzáad egy új képet szöveg nélkül // működik tesztelve 05.30 Lecza Tamás

app.post("/api/v1/addkep/notext", async (req, res) => {
    console.log(req.body);
    var date_time = new Date();
try {
    const ujSzoveg = await  pool.query(
        "INSERT INTO kep_szoveg_nelkul (kepnev_szoveg_nelkul, kep_feltoltes_ideje, kep_link, user_iduser) VALUES ($1,$2,$3,$4)" , [
            req.body.kepnev_szoveg_nelkul, date_time, req.body.kep_link, req.body.user_iduser]);
            res.status(201).json({
                status: date_time
            })
} catch (err) {
    console.log(err.message)
}
})
// visszaadja az összes kép adatát az adatbázisból működik: Tesztelve 05.30 Lecza Tamás
app.get("/api/v1/getallkep/notext", async (req,res) => {
    try {
        const result = await pool.query("SELECT * FROM kep_szoveg_nelkul;")
        console.log(result);
        res.status(200).json(
        result.rows
        
    )
    } catch (err) {
        console.log(err);
    }
    
})
// visszad egy képet a szöveg nélküli adatbázisból működik: Tesztelve 05.30 Lecza Tamás
app.get("/api/v1/onekep/notext/:id", async (req,res) => {
    console.log(req.params.id);
    try {
        const result = await pool.query(
            "SELECT * FROM kep_szoveg_nelkul where idkep_szoveg_nelkul = $1 ", [req.params.id]);

            res.status(200).json(
            result.rows[0]
            );
    } catch (err) {
        console.log(err.message);
    }
    
})
// módosít egy képet a szöveg nélküli adatbázisban működik: Tesztelve 05.30 Lecza Tamás
app.put("/api/v1/updatekep/notext/:id", async (req,res) => {
    var date_time = new Date();
    try {
        const update = await pool.query(
            "UPDATE kep_szoveg_nelkul SET kepnev_szoveg_nelkul = $1, kep_feltoltes_ideje = $2, kep_link = $3, user_iduser = $4 where idkep_szoveg_nelkul = $5",
            [req.body.kepnev_szoveg_nelkul,date_time,req.body.kep_link,req.body.user_iduser,req.params.id]
        );
        res.status(200).json({
                    user: update.rows[0]
            });
    } catch (err) {
        console.log(err.message)
    }
    
});

app.listen(PORT, ()=> console.log( `server started on port ${PORT}`))