const { find, create, update } = require("../controller/userController");
const express = require("express");
const router = express.Router();

router.get("/", find);
router.post("/", create);
router.put("/", update);

module.exports = router;
