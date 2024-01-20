const CountryService = require('../services/CountryService');
const db = require("../models");


const getCountryNameById = async (req, res) => {
    return await CountryService.getCountryNameById(req.body.countryId)
        .then(result => {
            res.status(200).send(result);
        }).catch(err => {
            res.status(404).send({ message:"Error getting data", err })
        });
}

module.exports = {
    getCountryNameById
}