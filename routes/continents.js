const router = require("express").Router();
// const tokenAuth = require('../middlewares/auth');

const {
  createContinent,
  getContinents,
  getContinent,
  updateContinent,
  deleteContinent,
} = require("../controllers/continents");

router.post("/", createContinent);
router.get("/", getContinents);
router.get("/:continentCode", getContinent);
router.patch("/:continentCode",  updateContinent);
router.delete("/:continentCode",  deleteContinent);

module.exports = router;
