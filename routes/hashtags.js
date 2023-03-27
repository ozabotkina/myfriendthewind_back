const router = require("express").Router();
const tokenAuth = require('../middlewares/auth');

const {
  createHashtag,
  getHashtags,
  getHashtag,
  updateHashtag,
  deleteHashtag,
} = require("../controllers/hashtags");

router.post("/", tokenAuth, createHashtag);
router.get("/", getHashtags);
router.get("/:hashtagCode", getHashtag);
router.patch("/:hashtagCode", tokenAuth,  updateHashtag);
router.delete("/:hashtagCode", tokenAuth, deleteHashtag);

module.exports = router;
