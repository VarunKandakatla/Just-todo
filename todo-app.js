const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json());
port = process.env.PORT || 3000;
app.listen(port);
todoList = [];

getTodo().then((data)=>{
    todoList = data;
})

app.get('/todos',(req,res)=>{
    res.status(200).json({Todos : todoList});
})

app.get('/:title',(req,res)=>{
    const task = req.params.title;
    todoList.push(task);
    addTodo().then(()=>{
        res.status(200).json({message : "Task Added!"});
    })
})

function getTodo()
{
    return new Promise((resolve,reject)=>{
        fs.readFile('./todos.json','utf-8',(err,data)=>{
            todoList = JSON.parse(data);
            resolve(todoList);
        })
    })
}

function addTodo(){
    return new Promise((resolve,reject)=>{
        fs.writeFile('./todos.json',JSON.stringify(todoList),(err)=>{
            resolve();
        });
    })
}