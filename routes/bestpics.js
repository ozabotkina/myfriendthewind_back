const router = require("express").Router();
const tokenAuth = require('../middlewares/auth');

const {
  createPic,
  getPic,
  getPics,
  updatePic,
  deletePic,
} = require("../controllers/bestpics")

router.post("/", tokenAuth, createPic);
router.get("/", getPics);
router.get("/:id", getPic);
router.patch("/:id", tokenAuth, updatePic);
router.delete("/:id", tokenAuth, deletePic);

module.exports = router;
