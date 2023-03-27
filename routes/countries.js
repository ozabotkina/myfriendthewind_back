const router = require("express").Router();
const tokenAuth = require('../middlewares/auth');

const {
  createCountry,
  getCountry,
  updateCountry,
  deleteCountry,
  getCountries
} = require("../controllers/countries");

router.post("/", tokenAuth, createCountry);
router.get("/", getCountries);
router.get("/:countryCode", getCountry);
router.patch("/:countryCode", tokenAuth, updateCountry);
router.delete("/:countryCode", tokenAuth, deleteCountry);

module.exports = router;
