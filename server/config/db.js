const mongoose = require('mongoose')
const mongodb = require('mongodb')


mongoose.connect('mongodb://localhost:27017/student',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})


const db = mongoose.connection

db.on('error', function (e){
    console.log(e)
})

db.on("open",function (){
    console.log("Connected!")
})
