const axios = require("axios");
const models = require("../models");

const getCountries = (req, res) => {
  axios
    .get("https://restcountries.com/v2/all")
    .then((response) => {
      const countries = response.data;
      models.countries.insert(countries);
      res.status(200).json(countries);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const getAllCountries = (req, res) => {
  models.countries
    .findAll()
    .then(([rows]) => {
      res.status(200).json(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getCountrieById = (req, res) => {
  models.countries
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = { getCountries, getCountrieById, getAllCountries };
