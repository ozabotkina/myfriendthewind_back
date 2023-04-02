const router = require("express").Router();
// const tokenAuth = require('../middlewares/auth');

const {
  createStory,
  getStory,
  updateStory,
  deleteStory,
  getStories
} = require("../controllers/stories");

router.post("/",  createStory);
router.get("/", getStories)
router.get("/:storyCode", getStory);
router.patch("/:storyCode",  updateStory);
router.delete("/:storyCode",  deleteStory);

module.exports = router;
