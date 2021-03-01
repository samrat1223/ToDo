const express = require('express');
const mongoose = require('mongoose');
const app = express()
const mongodb = 'mongodb+srv://Samrat:sam@cluster0.blkuc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongodb,{useNewUrlParser:true , useUnifiedTopology: true }).then(() => {
    console.log('connected')
    app.listen(3000);
})
.catch(err => 
    console.log(err))
   
   
 app.set('view engine','ejs');



app.get('/',(req,res) => {
    const items=[
        {name:'Book',price:1000},
        {name:'Mobile',price:5000},
        {name:'copy',price:4789},
    ]
   res.render('index',{items});
})

app.get('/add-item',(req,res) => {
    res.render('add-item');
})

app.use((req,res) => {
    res.render('error');
})