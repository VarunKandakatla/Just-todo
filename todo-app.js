const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json());
port = process.env.PORT || 3000;
app.listen(port);
todoList = [];

// getTodo().then((data)=>{
//     todoList = data;
// })

app.get('/todos',(req,res)=>{
    res.status(200).json({Todos : todoList});
})

app.get('/',(req,res)=>{
    res.status(200).send('Hello from express');
})

app.delete('/del',(req,res)=>{
    todoList = [];
    res.send("clear");
})

app.get('/add',(req,res)=>{
    for(let i=0;i<10000;i++)
    {
        todoList.push(i+1 +". Jai Shree Ram 🚩")
    }

    res.send();
})




// function getTodo()
// {
//     return new Promise((resolve,reject)=>{
//         fs.readFile('./todos.json','utf-8',(err,data)=>{
//             todoList = JSON.parse(data);
//             resolve(todoList);
//         })
//     })
// }

// function addTodo(){
//     return new Promise((resolve,reject)=>{
//         fs.writeFile('./todos.json',JSON.stringify(todoList),(err)=>{
//             resolve();
//         });
//     })
// }