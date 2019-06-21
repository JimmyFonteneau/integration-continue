#!/usr/bin/env node
const express = require('express');
const bodyParser = require('body-parser');
const emojiStrip = require('emoji-strip');
const Filter = require('bad-words');    
const app = express();

app.use(express.static('./public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/hello',(req,res) => {
    res.send('Hello word');
})

app.get('/profil/:id',(req,res) => {
    res.send('My profil');
})

app.get('/activities',(req,res) => {
    res.send('My activities');
})

app.get('/activity/:id',(req,res) => {
    res.send('My activity');
})

app.get('/comments/:activityId',(req,res) => {
    res.send('Comments of my activity');
})

app.post('/deleteemoji',(req,res) => {    
    const { comment } = req.body;
    console.log(comment);
    res.send(emojiStrip(comment));
})

app.post('/detectinsulte',(req,res) => {    
    const { comment } = req.body;
    console.log(comment);
    const filter = new Filter();
    res.send(filter.clean(comment));
})


app.post('/escapehtml',(req,res) => {    
    const { comment } = req.body;
    console.log(comment);
    const filter = new Filter();
    res.send(filter.clean(comment));
})

app.listen(1234);