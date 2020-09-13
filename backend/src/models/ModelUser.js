const mongoose = require('../config/database');

const Schema = mongoose.Schema;

const UserSchema =  new Schema({
    name:{type: String, require: true},
    email:{type:String, unique:true, lowercase:true ,required: true},
    password:{type:String, required: true, select:false},
    admin:{type:Boolean, default:false,select:true },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('users',UserSchema);