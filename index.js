const express=require("express");
const app=express();
const path=require("path");

const hbs=require("hbs");
const collection=require("./mongodb")
const templatepath=path.join(__dirname,'../template');
app.post("/siginin",async (req,res)=>{
    const data={
        name:req.body.rnam,   
        password:req.body.rpas,
        contact:req.body.rnum,
        email:req.body.rema,
        dob:req.body.rdob
    }
    await collection.insertMany([data]);
    console.log("success");
})
app.post('/login',(req, res) => {
    const username = req.body.name;
    const password = req.body.password;
    collection.findOne({ name: username, password: password })
    .then((user) => {
      if (!user) {
        console.log('User not found');
        res.send('Invalid username or password');
      } else {
        console.log('User signed in:', user);
        res.render('home');
      }
  
    })
    .catch((error) => {
      console.log('Error finding user:', error);

app.listen(3009, () => {
    console.log(`App listening at http://localhost:3009`);
  });