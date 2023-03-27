const Continent = require("../models/continent");
const BadRequest = require("../utils/errors/BadRequest");
const Conflict = require("../utils/errors/Conflict")


module.exports.createContinent = (req, res, next) => {

  Continent.create({
    code: req.body.code,
    title: req.body.title,
    titleEn: req.body.titleEn,
    coverTitle: req.body.coverTitle,
    coverTitleEn: req.body.coverTitleEn,
    picture: req.body.picture,
    countries: req.body.countries
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

module.exports.getContinent = (req, res, next) => {
  console.log(req.params.continentCode);
  Continent.findOne({code: req.params.continentCode})
    .then((data) => {
      res.status(200).send({
        data,
      });
    })
    .catch(next);
};

module.exports.getContinents = (req, res, next) => {
  Continent.find()
    .then((data) => {
      res.status(200).send({
        data,
      });
    })
    .catch(next);
};


module.exports.updateContinent = (req, res, next) => {
  Continent.findOneAndUpdate({code:req.params.continentCode},
    {
      title: req.body.title,
      titleEn: req.body.titleEn,
      coverTitle: req.body.coverTitle,
      coverTitleEn: req.body.coverTitleEn,
      picture: req.body.picture,
      countries: req.body.countries
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

module.exports.deleteContinent = (req, res, next) => {
  Continent.findOneAndDelete({code:req.params.continentCode})
    .then((data) => res.send(data))
    .catch(next);
};
