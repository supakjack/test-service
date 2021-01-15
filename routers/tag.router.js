const express = require("express");
const router = express.Router();
const testController = require("../controllers/tag.controller");

router.post("/create_tag", testController.create);
router.get("/update_tag", testController.update);
router.get("/delete_tag", testController.delete);
router.get("/show_all_tag", testController.show_all);

module.exports = router;
