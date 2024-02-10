const router = require("express").Router();
const { Tag, Product } = require("../../models");

// Get all tags
router.get("/", async (req, res) => {
  try {
    const tagData = await Tag.findAll({ include: Product });
    res.json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get a tag by ID
router.get("/:id", async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, { include: Product });
    tagData ? res.json(tagData) : res.status(404).json({ message: "Tag not found" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new tag
router.post("/", async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update a tag by ID
router.put("/:id", async (req, res) => {
  try {
    const [affectedRows] = await Tag.update(req.body, { where: { id: req.params.id } });
    affectedRows > 0 ? res.json({ message: "Tag updated" }) : res.status(404).json({ message: "Tag not found" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a tag by ID
router.delete("/:id", async (req, res) => {
  try {
    const affectedRows = await Tag.destroy({ where: { id: req.params.id } });
    affectedRows > 0 ? res.json({ message: "Tag deleted" }) : res.status(404).json({ message: "Tag not found" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
