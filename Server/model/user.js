const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const userSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    
   
    email:{
        type: String,
        required: true
    },
    
    roles: {
        User: {
            type: Number,
            default: 2
        },
    
        Admin: Number
    },
    password: {
        type: String,
        required: true
    },
   
    

});
userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        const hashedtoken = await bcrypt.hash(this.password, 8);
        this.password = hashedtoken;
    }

});




module.exports = mongoose.model('Userdetails', userSchema);