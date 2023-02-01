const models = require("../models");

const getPlayers = (req, res) => {
  models.players
    .findAll()
    .then(([rows]) => {
      res.status(200).json(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getPlayerById = (req, res) => {
  models.players
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

const postPlayer = (req, res) => {
  const user = req.body;
  models.user
    .insert(user)
    .then(([result]) => {
      const message = "Player successfully created.";
      res.location(`/players/${result.insertId}`).status(201).json(message);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.message });
    });
};

const editPlayer = (req, res) => {
  const player = req.body;
  player.id = parseInt(req.params.id, 10);
  models.players
    .update(player)
    .then(([rows]) => {
      if (rows.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        const message = "Product successfully modified.";
        res.status(200).json({ message });
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const deletePlayer = (req, res) => {
  models.players
    .delete(req.params.id)
    .then(([rows]) => {
      if (rows.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        const message = "Product successfully deleted ";
        res.status(200).json({ message });
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getPlayers,
  getPlayerById,
  postPlayer,
  editPlayer,
  deletePlayer,
};
