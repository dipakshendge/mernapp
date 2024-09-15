let mongoose = require ("mongoose");
let bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

let userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

// for secure password

userSchema.pre("save", async function(next) {
    let user = this;
    
    if (!user.isModified("password")) {
        return next();
    }

    try {
        let saltRound = 10;
        let hash_password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_password;
        next();
    } catch (error) {
        return next(error);
    }
})

// creating jsonwebtoken generateToken function is call in auth_controller
userSchema.methods.generateToken=async function() {
    try {
        return await jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin
        },
        process.env.TOKEN_SECRET_KEY,
        {
            expiresIn: "30d"
        });
    } catch (error) {
        console.error(error);
    }
}

// checking password is match

userSchema.methods.passwordCheck = async function(password) {
    try {
         return bcrypt.compare(password, this.password)
    } catch (error) {
        console.error(error);
    }
} 

// define module or collection name

const User = mongoose.model("User",userSchema);

module.exports = User;