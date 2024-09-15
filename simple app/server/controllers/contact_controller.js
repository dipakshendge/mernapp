const Contact = require('../models/contact_model');

let contactForm = async(req, res) => {
    try {
        let response = req.body;

        await Contact.create(response);
        return res.status(201).json({msg: "message sent successfully"});
        
    } catch (error) {

       return res.status(500).json({msg: "message not delivered"});

    }
};

module.exports = contactForm;