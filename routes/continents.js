const router = require("express").Router();
const tokenAuth = require('../middlewares/auth');

const {
  createContinent,
  getContinents,
  getContinent,
  updateContinent,
  deleteContinent,
} = require("../controllers/continents");

router.post("/", tokenAuth, createContinent);
router.get("/", getContinents);
router.get("/:continentCode", getContinent);
router.patch("/:continentCode", tokenAuth, updateContinent);
router.delete("/:continentCode", tokenAuth, deleteContinent);

module.exports = router;
