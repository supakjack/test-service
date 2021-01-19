const express = require("express");
const router = express.Router();
const testController = require("../controllers/tag.controller");

// Create a new tag by tagCreateBy
router.post("/api/:tagCreateBy/create/", testController.create);

// Update a tag by tagCreateBy
router.get("/api/:tagCreateBy/update/:tagId", testController.update);

// Delete a tag by tagCreateBy
router.delete("/api/:tagCreateBy/delete/:tagId", testController.delete);

// Get all tag by tagCreateBy
router.get("/api/:tagCreateBy/getAll/", testController.getAllById);

// Get all tags
router.get("/api/getAll/", testController.getAll);

// Get single tag
router.get("/api/:tagCreateBy/getTag/:tagId", testController.getTag);

module.exports = router;
