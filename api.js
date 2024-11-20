const client = require('./connection.js')
const express = require('express');
const app = express();


app.listen(3000, ()=>{
    console.log("Sever is now listening at port 3000");
})

client.connect();


app.get('/todos', (req, res)=>{
    client.query(`Select * from todos`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})


app.get('/todos/:id', (req, res)=>{
    client.query(`Select * from todos where id=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})
client.connect();


