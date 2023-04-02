const router = require("express").Router();
const tokenAuth = require('../middlewares/auth');

const {
  createTag,
  getTag,
  getTags,
  updateTag,
  deleteTag,
} = require("../controllers/pictags")

router.post("/",  createTag);
router.get("/", getTags);
router.get("/:tagCode", getTag);
router.patch("/:tagCode",  updateTag);
router.delete("/:tagCode",  deleteTag);

module.exports = router;
