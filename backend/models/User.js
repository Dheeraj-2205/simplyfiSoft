const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Please Enter Your Name"]
    },
    email : {
        type : String,
        required :[ true , "Please Enter Your Email"]
    },
    password : {
        type : String,
        required : [true, "Please Enter Your Password"],
        select : false
    },
    cart : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Post"
        }
    ]
});

userSchema.pre("save", async function (next){
    if(this.isModified("password")){

        this.password = await bcrypt.hash(this.password,10);
    }
    next();
})
userSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateToken = function (){
    return jwt.sign({id : this._id},process.env.JWT_SECRET);
}
module.exports = mongoose.model("Post", userSchema);