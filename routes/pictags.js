const router = require("express").Router();
const tokenAuth = require('../middlewares/auth');

const {
  createTag,
  getTag,
  getTags,
  updateTag,
  deleteTag,
} = require("../controllers/pictags")

router.post("/", tokenAuth, createTag);
router.get("/", getTags);
router.get("/:tagCode", getTag);
router.patch("/:tagCode", tokenAuth, updateTag);
router.delete("/:tagCode", tokenAuth, deleteTag);

module.exports = router;
