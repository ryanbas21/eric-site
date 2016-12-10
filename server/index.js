'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const cookieparser = require('cookie-parser');
const cors = require('cors');
const app = express();
const path = require('path');
const PORT = process.env.port || 3000;

bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());
app.use(cookieparser());
app.use((req,res,next) => {
  res.header('Acess-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use(express.static(path.join(__dirname, './public')));


app.get('/', (req,res) => res.send('Some Data').status(200).json());
//routes to load pictures
app.get('/bubble', (req,res) => {
  console.log('hi this works');
  res.sendFile('bubble.png', { root: path.join(__dirname, './assests') })
  })
app.get('/chartoftheday', (req,res) => res.sendFile('chartoftheday.png', { root: path.join(__dirname, './assests') }))
app.get('/ism', (req,res) => res.sendFile('ism.png', { root: path.join(__dirname, './assests') }))
app.get('/jobsreport', (req,res) => res.sendFile('jobsreport.png', { root: path.join(__dirname, './assests') }))
app.get('/usvcanada', (req,res) => res.sendFile('usvcanada.png', { root: path.join(__dirname, './assests') }))
app.get('/favicon.ico', (req,res) => res.status(200).end());
app.listen( () => console.log('Server running on ' + PORT));
