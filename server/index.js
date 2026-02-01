const express = require("express");
let users = require("./sample.json")
const app = express();
const port = 8000;
const cors = require("cors");
const fs = require("fs");

app.use(express.json());

app.use(cors({
    origin:"http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "DELETE"]
}));

//Display all users
app.get("/users", (req,res) => {
    return res.json(users);
});

//Delete user detail 
app.delete("/users/:id",(req,res)=>{
    let id=Number(req.params.id);
    let filteredUsers = users.filter((user)=> user.id !== id);
    fs.writeFile("./sample.json",JSON.stringify(filteredUsers),(err,data) => {
        return res.json(filteredUsers)
    });
});

//Add new user
app.post("/users",(req,res) => {
    let {name, age, city} = req.body;

    if(!name || !age || !city){
        return res.status(400).send({message: "All Fields Required"})
    }
    let id = Date.now();
    users.push({id, name, age, city});

    fs.writeFile("./sample.json",JSON.stringify(users),(err,data) => {
        return res.json({message : "User detail added success"});
    });

    
});

app.listen(port, (err) => {
    console.log(`App is running in port ${port}`)
}); 