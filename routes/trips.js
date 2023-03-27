const router = require("express").Router();
const tokenAuth = require('../middlewares/auth');


const {
  createTrip,
  getTrip,
  updateTrip,
  deleteTrip,
  getTrips
} = require("../controllers/trips");

router.post("/", tokenAuth, createTrip);
router.get("/", getTrips);
router.get("/:tripCode", getTrip);
router.patch("/:tripCode", tokenAuth, updateTrip);
router.delete("/:tripCode", tokenAuth, deleteTrip);

module.exports = router;
