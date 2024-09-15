const Service = require('../models/service_model')

const Servises =async (req, res) => {
    try {
        let response = await Service.find();
        if(!response){
            res.status(401).json({msg:"Service Not Found"})
        }
        res.status(201).json({response})
    } catch (error) {
        console.log(`Error in services page backend ${error}`);
    }

}

module.exports = Servises;