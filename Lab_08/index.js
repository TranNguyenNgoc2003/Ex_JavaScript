const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const connectDB = async(req, res, next) =>{
    mongoose.connect('mongodb://localhost:27017/user');

    const userSchema = new mongoose.Schema({});
    const users = mongoose.model('user',userSchema);
    const data = await users.find();
    console.warn(data);
}

connectDB();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

//findOne()
//dọc 1 file HTML trên index.js
