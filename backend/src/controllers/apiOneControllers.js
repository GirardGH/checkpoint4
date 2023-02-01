const axios = require("axios");
require("dotenv").config();

const fetchOne = (req, res) => {
  const headers = {
    "X-Auth-Token": process.env.API_ONE_KEY,
  };
  axios
    .get("https://api.football-data.org/v4/competitions/CL/scorers", {
      headers,
    })
    .then((response) => {
      const players = response.data.scorers.map((scorer) => ({
        ...scorer,
        image_url: `http://localhost:5000/assets/images/avatar/image_${scorer.player.id}.jpg`,
      }));

      res.status(200).json(players);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

module.exports = {
  fetchOne,
};

// const fetchOne = (req, res) => {
//   const headers = {
//     "X-Auth-Token": process.env.API_ONE_KEY,
//   };
//   axios
//     .get("https://api.football-data.org/v4/competitions/CL/scorers", {
//       headers,
//     })
//     .then((response) => {
//       res.status(200).json(response.data);
//     })
//     .catch((error) => {
//       res.status(error.response.status).json(error.response.data);
//     });
// };

module.exports = {
  fetchOne,
};
