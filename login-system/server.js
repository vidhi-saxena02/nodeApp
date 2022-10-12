const express= require("express");
const path = require('path');
const app = express();
const cors = require('cors');

app.use(
    cors({
        origin:"http://localhost:3000",
    })
)
const port  = process.env.PORT||3000


const {getAllUsers,postUser} = require('./controllers/users.controller')
app.set('view engine','ejs');

//load static assets

app.use('/static',express.static(path.join(__dirname,'public')))
app.use('/assets',express.static(path.join(__dirname,'public/assets')))

app.use("/site",express.static(path.join(__dirname,'site')))
//home route
app.get('/',(req,res)=>{
    res.render('base',{title:"Login System"});
})
app.get('/users',(req,res)=>{
    res.send(getAllUsers());
})

app.post('/site',postUser)
app.get('/site',(req,res)=>{
    res.sendFile('index.html');
})





app.listen(port,()=>{console.log("Listening at port http://localhost:3000")});