const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');


const app = express()

app.use(express.static(path.join(__dirname, "public")))
app.use(cors())
app.use(express.json())

const port = 5000;



const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database: "books_db"
})

app.get('/books',(req,res)=>{
    const sql = "SELECT * FROM books";
    db.query(sql,(err,data)=>{
        if(err){
          return res.json({ error: "Database Error" });
        }
        return res.json(data);
    })
})

app.post('/create',(req,res)=>{
    const sql = "INSERT INTO books (book_id ,title,publisher,publicaton_year,isbn,description,) VALUES (?)";
    const values = [
        req.body.book_id,
        req.body.title,
        req.body.publisher,
        req.body.publicaton_year,
        req.body.isbn,
        req.body.description,
    ];
    db.query(sql,[values], (err,data)=>{
        if(err) {
            return res.json({ error: "Database Error" });
        }
        return res.json(data);
    })
})

app.put('/update/:id',(req,res)=>{
    const sql = "UPDATE books SET  book_id = ?, title = ?, publisher = ?, publicaton_year = ?, isbn = ?, description = ? WHERE id = ?";
    const values = [
        req.body.book_id,
        req.body.title,
        req.body.publisher,
        req.body.publicaton_year,
        req.body.isbn,
        req.body.description,
    ];
    const id = req.params.id;
    db.query(sql, [...values, id], (err, data) => { 
        if(err) {
            return res.json({ error: "Database Error" });
        }
        return res.json(data);
    })
})

app.put('/update/:id',(req,res)=>{
    const sql = "UPDATE books SET  book_id = ?, title = ?, publisher = ?, publicaton_year = ?, isbn = ?, description = ? WHERE id = ?";
    const values = [
        req.body.book_id,
        req.body.title,
        req.body.publisher,
        req.body.publicaton_year,
        req.body.isbn,
        req.body.description,
    ];
    const id = req.params.id;
    db.query(sql, [...values, id], (err, data) => { 
        if(err) {
            return res.json({ error: "Database Error" });
        }
        return res.json(data);
    })
})

app.delete('/delete/:id',(req,res)=>{
    const sql = "DELETE FROM books WHERE id = ?";
    const id = req.params.id;
    db.query(sql,[id], (err,data)=>{
        if(err) {
            return res.json({ error: "Database Error" });
        }
        return res.json(data);
    })
})

app.get('/getrecord/:id',(req,res)=>{
    const sql = "SELECT * FROM books WHERE id = ?";
    const id = req.params.id;
    db.query(sql,[id], (err,data)=>{
        if(err) {
            return res.json({ error: "Database Error" });
        }   
        return res.json(data[0]);
    })
app.listen(port, ()=>{
console.log('listening')
})

