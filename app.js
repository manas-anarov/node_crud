const express = require('express');

const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

const bodyParser = require('body-parser');

const postsRoute = require('./routes/posts');
const cors = require('cors');

app.use(cors());


app.use(bodyParser.json());
app.use('/posts', postsRoute)

//user
//userNode

//password
//1993Node2020Snoop


//mongo "mongodb+srv://cluster0.ztm3j.mongodb.net/<dbname>" --username userNode


// app.use('/posts', () =>{
// 	console.log('This is a middleware running')
// })


// mongoose.connect('mongodb+srv://userNode:1993Node2020Snoop@cluster0.ztm3j.mongodb.net/CluserO?retryWrites=true&w=majority',{ useNewUrlParser: true,  useUnifiedTopology: true}, () =>{
// 	console.log('salam')
// });

mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true,  useUnifiedTopology: true}, () =>{
	console.log('salam')
});

//roures
app.get('/', (req,res) =>{
	res.send('Флаттерчилерге салам');
});




app.listen(3000);