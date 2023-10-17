const express = require('express');
const mongoose = require('mongoose');
const categories = require('./Routes/categories')
const students = require('./Routes/students')
const courses = require('./Routes/courses')
const app = express();

mongoose.connect('mongodb://localhost/learningPlatform')
 .then(()=> console.log('Connection is successful to Database'))
 .catch(err => console.error('coudlnt connect to database', err))



app.use(express.json());
app.use('/api/categories', categories);
app.use('/api/students', students);
app.use('/api/courses', courses);



app.listen(3000, ()=>{
    console.log('port is running on 3000');
})








