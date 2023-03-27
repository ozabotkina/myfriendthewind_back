const Country = require("../models/country");
const BadRequest = require("../utils/errors/BadRequest");
const Conflict = require("../utils/errors/Conflict")


module.exports.createCountry = (req, res, next) => {

  Country.create({
    code: req.body.code,
    title: req.body.title,
    titleEn: req.body.titleEn,
    coverTitle: req.body.coverTitle,
    coverTitleEn: req.body.coverTitleEn,
    continent: req.body.continent,
    coverPic: req.body.coverPic,
    picture: req.body.picture,
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

module.exports.getCountry = (req, res, next ) => {
  Country.findOne({ code: `${req.params.countryCode}` })
    .then((data) => {
      res.status(200).send({
        data,
      });
    })
    .catch((err) => {
      // if (err.name === 'ValidationError') { return next(new BadRequest('Некорректный запрос')); }
      // if (err.code === 11000) { return next(new Conflict('Емейл уже зарегистрирован')); }
      return next(err);
    });
};

module.exports.getCountries = (req, res, next) => {
  Country.find()
    .then((data) => {
      res.status(200).send({
        data,
      });
    })
    .catch((err) => {
      return next(err);
    });
};


module.exports.updateCountry = (req, res, next) => {
  Country.findOneAndUpdate(
    req.params.countryName,
    {
      code: req.body.code,
      title: req.body.title,
      titleEn: req.body.titleEn,
      coverTitle: req.body.coverTitle,
      coverTitleEn: req.body.coverTitleEn,
      continent: req.body.continent,
      coverPic: req.body.coverPic,
      picture: req.body.picture,
      },
    { new: true, runValidators: true }
  )
    .then((data) => {
      res.status(200).send({
        data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.deleteCountry = (req, res) => {
  Country.findOneAndDelete(req.params.countryName)
    .then((data) => res.send(data))
    .catch((err) => {
      console.log(err);
    });
};
