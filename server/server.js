const express = require('express');
const app = express();
const cors = require("cors");
const db = require("./config/config")
app.use(cors());
app.use(express.json());



app.post("/create",(req,res)=>{
    console.log(req.body);
    const name = req.body.name;
    const reg = req.body.reg;
    const department = req.body.department;
    const year = req.body.year;

    db.query(
        "INSERT INTO student (name, reg, department, year) VALUES (?,?,?,?)",
    [name,reg,department,year],
    (err,result) =>{
        if(err){
            console.log(err);
        }else{
            res.send("Value inserted");
        }
    }
    )
})

app.get("/show",(req,res) =>{
    db.query("SELECT * FROM student",(err,result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
})

app.listen(3001,() =>{
    console.log("port on 3001");
})