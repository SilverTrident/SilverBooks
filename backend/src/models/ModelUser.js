const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const UserSchema =  new Schema({
    name:{type: String, require: true},
    email:{type:String, required: true},
    password:{type:String, required: true},
    admin:{type:Boolean, default:false },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('users',UserSchema);