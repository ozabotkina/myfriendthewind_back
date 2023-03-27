const router = require("express").Router();
const tokenAuth = require('../middlewares/auth');

const {
  createStory,
  getStory,
  updateStory,
  deleteStory,
  getStories
} = require("../controllers/stories");

router.post("/", tokenAuth, createStory);
router.get("/", getStories)
router.get("/:storyCode", getStory);
router.patch("/:storyCode", tokenAuth, updateStory);
router.delete("/:storyCode", tokenAuth, deleteStory);

module.exports = router;
