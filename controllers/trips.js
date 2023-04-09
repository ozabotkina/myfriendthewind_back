const BadRequest = require("../utils/errors/BadRequest");
const Conflict = require("../utils/errors/Conflict")

const Trip = require("../models/trip");

module.exports.createTrip = (req, res, next) => {

  Trip.create({ 
    code: req.body.code,
    title: req.body.title,
    titleEn: req.body.titleEn,
    coverTitle: req.body.coverTitle,
    coverTitleEn: req.body.coverTitleEn,
    picPath: req.body.picsPath,
    coverPic: req.body.coverPic,
    countries: req.body.countries,
    hashtags: req.body.hashtags,
    issueDate: req.body.issueDate,
  })
    .then((data) => {
      res.status(200).send({
        data,
      });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') { return next(new BadRequest()); }
      if (err.code === 11000) { return next(new Conflict()); }
      return next(err);
    });
};

module.exports.getTrip = (req, res, next) => {
  Trip.findOne({ code: `${req.params.tripCode}`})
    .then((data) => {
      res.status(200).send({
        data,
      });
    })
    .catch((err) => {
      return next(err);
    });
};


module.exports.getTrips = (req, res, next) => {
  Trip.find()
    .then((data) => {
      res.status(200).send({
        data,
      });
    })
    .catch((err) => {
      return next(err);
    });
};


module.exports.updateTrip = (req, res, next) => {
  Trip.findOneAndUpdate(
    req.params.tripCode,
    {
      code: req.body.code,
      title: req.body.title,
      titleEn: req.body.titleEn,
      coverTitle: req.body.coverTitle,
      coverTitleEn: req.body.coverTitleEn,
      picPath: req.body.picsPath,
      coverPic: req.body.coverPic,
      countries: req.body.countries,
      hashtags: req.body.hashtags,
      issueDate: req.body.issueDate,

      },
    { new: true, runValidators: true }
  )
    .then((data) => {
      res.status(200).send({
        data,
      });
    })
    .catch((err) => {
      return next(err);
    });
};

module.exports.deleteTrip = (req, res, next) => {
  Trip.findOneAndDelete(req.params.tripCode)
    .then((data) => res.send(data))
    .catch((err) => {
      return next(err);
    });
};
