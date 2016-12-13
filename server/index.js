// 'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const cookieparser = require('cookie-parser');
const cors = require('cors');
const app = express();
const path = require('path');
const foundation = require('foundation');
const PORT = 3000;
const userTable = require('./models/user.model');


/*******************************************************************************
*
*
*
*                              Middleware Setup
*
*
*
******************************************************************************/
const { getUser, createUser } = require('./controllers/usercontroller');
bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());
app.use(cookieparser());

// app.use(express.static(__dirname + '../public/'))
app.use((req,res,next) => {
  res.header('Acess-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


/*******************************************************************************
*
*
*
*                              Routes
*
*
*
******************************************************************************/
app.get('/', (req,res) => res.sendFile('index.html', { root: path.join( __dirname + './../public/') } ));
app.get('/styles.css', (req,res) => res.sendFile('styles.css', { root: path.join( __dirname + './../public')}))
app.get('')

/*******************************************************************************
*
*
*
*                              Login/SignUp
*
*
*
******************************************************************************/
app.get('/signupnow', createUser, (req,res) => res.status(200).send());
app.get('/checkUser', getUser, (req,res) => res.status(200).send());


/*******************************************************************************
*
*
*
*                              Homepage Routes
*
*
*
******************************************************************************/
app.get('/bubble', (req,res) => {
  console.log('hi this works');
    res
      .status(200)
      .sendFile('bubble.png', { root: path.join( __dirname, '../public/assets') })
});
app.get('/chart', (req,res) => {
        res
        .status(200)
        .sendFile('chart.png', { root: path.join(__dirname, '../public/assets') })
})
app.get('/ism', (req,res) => {
    res
      .status(200)
      .sendFile('ism.png', { root: path.join(__dirname, '../public/assets/') })
})
app.get('/jobsreport', (req,res) =>{
   res
   .status(200)
   .sendFile('jobsreport.png', { root: path.join(__dirname, '../public/assets/') })
})
app.get('/usvcanada', (req,res) =>{
   res
   .status(200)
   .sendFile('usvcanada.png', { root: path.join(__dirname, '../public/assets/') })
})







app.get('/favicon.ico', (req,res) => res.status(200).end() );
app.listen(PORT, 'localhost', () => console.log('Server running on ' + PORT) );
