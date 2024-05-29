
const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({

    fname : String,

    lname : String,
        
    email :  String ,

    pno : String,
        
    msg :String

})

const UserModel = mongoose.model("user",UserSchema) // user is new collection

module.exports = UserModel ;