const express = require("express");

const router = express.Router();

const playerControllers = require("../controllers/playerControllers");

router.get("/players", playerControllers.getPlayers);
router.get("/players/:id", playerControllers.getPlayerById);
router.post("/players", playerControllers.postPlayer);
router.put("/players/:id", playerControllers.editPlayer);
router.delete("/players/:id", playerControllers.deletePlayer);

module.exports = router;
