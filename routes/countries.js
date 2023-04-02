const router = require("express").Router();
// const tokenAuth = require('../middlewares/auth');

const {
  createCountry,
  getCountry,
  updateCountry,
  deleteCountry,
  getCountries
} = require("../controllers/countries");

router.post("/",  createCountry);
router.get("/", getCountries);
router.get("/:countryCode", getCountry);
router.patch("/:countryCode", updateCountry);
router.delete("/:countryCode",  deleteCountry);

module.exports = router;
