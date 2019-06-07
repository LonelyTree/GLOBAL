const mongoose=require('mongoose')


const UserSchema=new mongoose.Schema({
    username: String,
    password: String,
    backpack: {
        coordinates: [{
            lat: Number,
            lon: Number
        }],
        favorites: [String],
        notes:[String]
    }
})

module.exports = mongoose.model('User', UserSchema)