//Katia Montserrat Paredes Hernández TI03SM-23

const logRouteAccess = (req, res, next) => {
    const currentDate = new Date();
    console.log("Tamalito");
    console.log("Fecha y hora:" + currentDate);
    next();
};

module.exports = logRouteAccess;
 