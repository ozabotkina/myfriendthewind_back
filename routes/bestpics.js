const router = require("express").Router();
// const tokenAuth = require('../middlewares/auth');

const {
  createPic,
  getPic,
  getPics,
  updatePic,
  deletePic,
} = require("../controllers/bestpics")

router.post("/",  createPic);
router.get("/", getPics);
router.get("/:id", getPic);
router.patch("/:id",  updatePic);
router.delete("/:id", deletePic);

module.exports = router;
