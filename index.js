
const express = require('express');
//console.log(express);

//now we are trying to create a server 
const app= express();

const PORT = process.env.PORT || 3000;
//here for new branch we try to create get method only
const member= [{                      //this array represent database 
  id: 1,
  name : "John",
  email: "John@123gmail.com",
  status: "active"
},
{
  id: 2,
  name: "Ankur",
  email:"Ankur@gmail.com",
  status: "inactive"
},
{
  id: 3,
  name: "Ankit",
  email:"Ankit@gmail.com",
  status:"active"
}]

//now we will create get request 
app.get("/showAllUser",(req,res)=>
{
   // 200 -> it means all the things are good
   //json ->data must be shown in json format
   //member -> now this array which we mentioned 
  res.status(200).json(member)
})

//now I want to see data of given id 
//: ->here it means placeholder
//id ->variable name  
app.get("/showUser/:uid",(req,res)=>
{
  //console.log(req);  //it is very big object 
  //anything comes from parameter the number will become string 
  //console.log(typeof parseInt( req.params.uid))
  
   const id = req.params.uid;
   //if member id is same given id in Get request then return the user 
   //The filter function in the line you provided is used to filter an array of member objects based on a certain condition
    const user = member.filter(member => member.id ===parseInt(id));
    //user.length!==0  ->it means we have given some value in Get Request
    user.length!==0 ? res.status(200).json(user) : res.status(200).json({msg:"User Not Found"})
    
})

app.listen(PORT,()=>console.log(`Server is running at ${PORT}`));