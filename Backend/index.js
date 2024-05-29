const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require('./Models/user')

const app = express() ;

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/user')

app.post('/contactus',(req, res) => {
    UserModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})


const PORT =  3000 ;

app.listen(PORT,()=>{

    console.log(`Server running on port  ${PORT} `)

})