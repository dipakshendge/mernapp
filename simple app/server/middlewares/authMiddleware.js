const jwt = require('jsonwebtoken');
let User = require('../models/user_model')


const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization');
    
    try {
        // let authToken = token.replace("bearer", "").trim();
        let authToken = token.split(" ").slice(1).toString().trim();
        let isVerifide = jwt.verify(authToken, process.env.TOKEN_SECRET_KEY)
        let userData = await User.findOne({email:isVerifide.email}).select({password:0})
        // console.log(userData);

        req.user = userData;
        req.token = token;
        req.userId = userData._id;
        next();
    } catch (error) {
        res.status(401).json({message: "Token not provided or unothorised HTTP request"})
        next()
    }
    
}

module.exports= authMiddleware;