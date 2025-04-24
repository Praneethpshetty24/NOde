const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.get("/data",(req,res)=>{
    try{
        const data = fs.readFileSync('./data.json','utf-8');
        res.write("Hello World")
        res.json(JSON.parse(data))

    }catch(err){
        console.log(err);
        res.status.json({message:"error"})
    }
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})