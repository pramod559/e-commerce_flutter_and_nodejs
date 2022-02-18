import mongoose from 'mongoose';


//create User schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    url_image: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    role: {
        default: 'guest',
        type: String,
        enum: ['admin', 'user', 'guest'],
        required: true
    }


});

UserSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
        //do not reveal passwordHash
        delete returnedObject.password;
    },
});

const User = mongoose.model('Users', UserSchema);

// User.create({
//     name: 'John',
//     email: 'john@example.com',
//     password: 'password',
//     gender: 'male'
// });

module.exports = User;