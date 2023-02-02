const express = require("express");

const router = express.Router();

const countriesControllers = require("../controllers/countriesControllers");

router.get("/countries", countriesControllers.getCountries);
router.get("/countries/all", countriesControllers.getAllCountries);
router.get("/countries/all/:id", countriesControllers.getCountrieById);

module.exports = router;
