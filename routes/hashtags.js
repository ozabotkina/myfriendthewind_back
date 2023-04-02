const router = require("express").Router();
// const tokenAuth = require('../middlewares/auth');

const {
  createHashtag,
  getHashtags,
  getHashtag,
  updateHashtag,
  deleteHashtag,
} = require("../controllers/hashtags");

router.post("/",  createHashtag);
router.get("/", getHashtags);
router.get("/:hashtagCode", getHashtag);
router.patch("/:hashtagCode",  updateHashtag);
router.delete("/:hashtagCode",  deleteHashtag);

module.exports = router;
