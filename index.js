//https://www.section.io/engineering-education/nodejs-mongoosejs-mongodb/
const express = require('express');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
require("./server/config/db")
const app = express();


/*Models*/
const userModel = require("./server/model/UserSchema")
app.use(express.json());
app.listen(3000);

app.get('/test',test)


async function test(req,res){

    const user = await userModel.find()

    res.send(user)
}






