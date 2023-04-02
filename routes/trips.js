const router = require("express").Router();
// const tokenAuth = require('../middlewares/auth');


const {
  createTrip,
  getTrip,
  updateTrip,
  deleteTrip,
  getTrips
} = require("../controllers/trips");

router.post("/",  createTrip);
router.get("/", getTrips);
router.get("/:tripCode", getTrip);
router.patch("/:tripCode", updateTrip);
router.delete("/:tripCode",  deleteTrip);

module.exports = router;
