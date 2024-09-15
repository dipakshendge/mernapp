const errorMiddleware = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Backend server error";
    const extraDetails = err.extraDetails || "Error From Backend";

    return res.status(status).json({status, message, extraDetails});
}

module.exports = errorMiddleware;