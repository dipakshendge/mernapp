


const validate = (Schema) => async(req, res, next) => {
    try {
        const parsBody = await Schema.parseAsync(req.body);
        req.body = parsBody;
        next()
    } catch (error) {
        console.log(error);
        let status = 422;
        let message = "Fill the Input Proerly"
        let extraDetails = error.issues[0].message;
        let err = {
            status,
            message,
            extraDetails
        }
        // res.status(400).json({msg:error.issues[0].message})
        next(err)
    }
};


module.exports = validate;