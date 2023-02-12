
const express = require('express');
//console.log(express);

//now we are trying to create a server 
const app= express();

const PORT = 3000;
const path = require('path');

const middleware = (req,res,next)=>{
   console.log("hi this is a middleware");
   next(); //this next function help to move to next function 
}

//all the static file is there in public folder can run by method use()
app.use(express.static(path.join(__dirname,'public')))
app.use(middleware); //with the help of middleware all four function will run 
app.get('/',middleware,(req,res) =>
{
   res.send("<h1>Hello World </h1>")
})
app.post('/',middleware,(req,res)=>{
   res.send("Hello this is a POST Request");
})
app.put('/',middleware,(req,res)=>
{
   res.send("Hello This is a PUT Request");
})

app.delete('/',middleware,(req,res)=>
{
   res.send("Hello This is a Delete Request");
})
app.listen(PORT,()=>console.log(`Server is running at ${PORT}`));