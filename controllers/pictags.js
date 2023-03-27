const Pictag = require("../models/pictag");
const BadRequest = require("../utils/errors/BadRequest");
const Conflict = require("../utils/errors/Conflict")


module.exports.createTag = (req, res, next) => {

  Pictag.create({
    code: req.body.code,
    title: req.body.title,
    titleEn: req.body.titleEn,
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

module.exports.getTag = (req, res, next) => {
  Pictag.findOne({code: req.params.tagCode})
    .then((data) => {
      res.status(200).send({
        data,
      });
    })
    .catch(next);
};

module.exports.getTags = (req, res, next) => {
  Pictag.find()
    .then((data) => {
      res.status(200).send({
        data,
      });
    })
    .catch(next);
};


module.exports.updateTag = (req, res, next) => {
  Pictag.findOneAndUpdate({code:req.params.tagCode},
    {
        code: req.body.code,
        title: req.body.title,
        titleEn: req.body.titleEn,
    
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

module.exports.deleteTag = (req, res, next) => {
  Pictag.findOneAndDelete({code:req.params.tagCode})
    .then((data) => res.send(data))
    .catch(next);
};
