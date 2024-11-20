const client = require('./connection.js')
const express = require('express');
const app = express();


app.listen(3001, ()=>{
    console.log("Sever is now listening at port 3001");
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


app.post('/todos', (req, res)=> {
    const user = req.body;
    let insertQuery = `insert into todos(todo, status) 
                       values('${user.todo}', '${user.status}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})


app.put('/todos/:id', (req, res)=> {
    let user = req.body;
    let updateQuery = `update users
                       set  = todo'${user.todo}',
                       status = '${user.status}',
                       where id = ${user.id}`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})
