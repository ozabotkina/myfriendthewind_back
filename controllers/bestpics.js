const NotFound = require("../utils/errors/NotFound");
const BestPic = require("../models/bestpic");
const BadRequest = require("../utils/errors/BadRequest");
const Conflict = require("../utils/errors/Conflict")

module.exports.createPic = (req, res, next) => {

  BestPic.create({
    title: req.body.title,
    titleEn: req.body.titleEn,
    country: req.body.country,
    tripCode: req.body.tripCode,
    coverPic: req.body.coverPic,
    orientation: req.body.orientation,
    hashtags: req.body.hashtags,
    year: req.body.year,
    link: req.body.link
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

module.exports.getPic = (req, res, next) => {
  BestPic.findOne({ _id: req.params.id })
    .then((data) => {
      if (!data) {
        throw new NotFound();
      } else {
        res.status(200).send({ data });
      }
    })
    .catch(next);
};

module.exports.getPics = (req, res, next) => {
  BestPic.find()
    .then((data) => {
      res.status(200).send({
        data,
      });
    })
    .catch(next);
};


module.exports.updatePic = (req, res,next) => {
  BestPic.findOneAndUpdate(
    { _id: req.params.id },
    {
      title: req.body.title,
      titleEn: req.body.titleEn,
      country: req.body.country,
      tripCode: req.body.tripCode,
      coverPic: req.body.coverPic,
      orientation: req.body.orientation,
      hashtags: req.body.hashtags,
      year: req.body.year,
      link: req.body.link


    },
    { new: true, runValidators: true }
  )
    .then((data) => {
      res.status(200).send({
        data,
      });
    })
      .catch(next);
};

module.exports.deletePic = (req, res, next) => {
  BestPic.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.send(data))
    .catch(next);
  };
