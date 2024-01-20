const db = require("../models");

// models
const Country = db.country;

const getCountryNameById = async (countryId) => {
    return await Country.findOne({
        where: {
            id: countryId
        }
    });
}


module.exports = {
    getCountryNameById: getCountryNameById
}