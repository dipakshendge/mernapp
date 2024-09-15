let User = require('../models/user_model');
let Contact = require('../models/contact_model');
let Service = require('../models/service_model');


//Fetching All Users for Admin
const Users = async(req, res) => {
    try {
        const users = await User.find({},{password:0});
        // console.log(users)
        if(!users || users.length === 0){
            return res.status(401).json({message: "Users Not Found"})
        }
        return res.status(200).json({users})
    } catch (error) {
        console.log(`error from admin controller ${error}`);
        next(error)
    }
};

//Fetching All Contacts for Admin
const Contacts = async(req,res) => {
    try {
        const contacts = await Contact.find();
        // console.log(contacts)
        if(!contacts || contacts.length===0){
            res.status(401).json({message:"Contacts Not Found"});
        }
        return res.status(201).json({contacts})
        
    } catch (error) {
        console.log(`Error from admin Contact page ${error}`);
    }
};

//Fetching All Services for Admin
const Services = async(req,res) => {
    try {
        const services = await Service.find();
        if(!services || services.length === 0){
            return res.status(401).json({message:"Services Not Found"})
        }
        return res.status(201).json(services);
    } catch (error) {
        console.log(`Error From admin services page ${error}`);
    }
}
module.exports = {Users,Contacts,Services};