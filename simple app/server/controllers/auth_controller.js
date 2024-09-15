let User = require("../models/user_model")
let  bcrypt = require("bcrypt")

const home = (async(req,res) => {
   try {
    res.status(200).send("This is from Home Page")
   } catch (error) {
    console.log(error)
   }
});

//*------------------------
/  User Registration /
//*------------------------

const register = (async(req,res) => {
    try {

        let {username, email, phone, password} = req.body;
        let userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({message:"Email Already Exist"});
        }
        // let saltRound = 10;
        // let hash_password = await bcrypt.hash(password,saltRound)
        // console.log(hash_password)

        let userCreated = await User.create({
        username, 
        email, 
        phone, 
        password  
        });
        res.status(201).json({
        message:"New User Created",
        token: await userCreated.generateToken(),
        userId:userCreated._id.toString()
        })
    } catch (error) {
        res.send(`page not found ${error}`)
        // next(error);
    }
});

//*------------------------
/  User Login /
//*------------------------

const login = async (req,res) => {

    try {
        let {email, password} = req.body;
        const userExist = await User.findOne({email});
        if(!userExist){
            return res.status(400).json({message: "Invalid Credentials"})
        }
        
      //  const passwordValid = await bcrypt.compare(password, userExist.password);

      const passwordValid = await userExist.passwordCheck(password); 

        // console.log(passwordValid)
        if(passwordValid){
            res.status(200).json({
            mgs:"Login Successful",
            token: await userExist.generateToken(),
            userId: userExist._id.toString()
        })
            // console.log(userExist)
        } else { 
            res.status(400).json({message: "invalid Email Or Password"})
        }
    } catch (error) {
        res.status(500).json("Internal server error")
    }
};

const user = async(req, res) => {
    try {
        const userData= req.user;
        // console.log(userData);
        return res.status(200).json({userData});
    } catch (error) {
        console.log("error from user route", error);
    }
}

module.exports = {home,register, login, user}