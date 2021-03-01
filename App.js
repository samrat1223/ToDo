const express = require('express');
const app = express()
const mongodb = 'mongodb+srv://Samrat:sam@cluster0.blkuc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
app.set('view engine','ejs');

app.listen(3000);

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