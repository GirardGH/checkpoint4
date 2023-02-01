const express = require("express");

const router = express.Router();

const itemControllers = require("../controllers/itemControllers");
const apiOneControllers = require("../controllers/apiOneControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.get("/topscorers", apiOneControllers.fetchOne);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

module.exports = router;
