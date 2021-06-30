const express = require('express');
// const { get } = require('config');
const connectDB = require('./config/db');
// const Router = require('express');
const userRoute = require('./routes/users');
const cors = require('cors');


const app = express();
//connectDB
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));
app.use(cors())



// Define Routes

app.use('/api/users', userRoute)
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));


const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.json({ msg: 'Welcome from get 5000 Json' }))

app.listen(PORT, () => console.log(`Hello from Port in ${PORT}`));