import express from "express" ; 
import dotenv from "dotenv"

const config = dotenv.config() ; 
const app =  express() ; 
app.use(express.json()) 

const port = process.env.PORT || 3002;

app.get("/" , (req,res) =>{
    res.send("Hello from node.js app running in K8") ;
}) ;

app.listen(port, () => {
   console.log( `Listening in port : ${port}`) ;
}) ;