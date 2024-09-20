const express = require("express");

const app = express();

const port=8000;


app.get('/',(req,res)=>{
    res.send("welcome to the page of vansh sanklecha");
});


app.get('/about',(req,res) => {
    res.send("welcome to the page of about");
});



app.get('/contact',(req,res)=>{
    res.send("welcome to the page of contect page ");
});

app.get('/temprecture',(req,res)=>{
    res.send("welcome to the page of tempratcure page  ");
}); 

app.listen(port, () => {
    console.log(`listining to the port ${port}`);
});