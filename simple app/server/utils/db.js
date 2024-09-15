let mongoose= require("mongoose");
// require('dotenv').config()
let URI = process.env.MONGO_URL
let connectDb = (async() => {
    try {
        await mongoose.connect(URI);
         console.log("Database Connected to DB");
    } catch (error) {
        console.log("Faield To Connect Database", error);
    }

})

module.exports = connectDb