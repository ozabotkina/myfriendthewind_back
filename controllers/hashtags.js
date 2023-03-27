const Hashtag = require("../models/hashtag");
const BadRequest = require("../utils/errors/BadRequest");
const Conflict = require("../utils/errors/Conflict")


module.exports.createHashtag = (req, res, next) => {

  Hashtag.create({
    code: req.body.code,
    coverTitle: req.body.coverTitle,
    coverTitleEn: req.body.coverTitleEn,
    coverPic: req.body.coverPic,
    picture: req.body.picture
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

module.exports.getHashtag = (req, res, next) => {
  Hashtag.findOne({code: req.params.hashtagCode})
    .then((data) => {
      res.status(200).send({
        data,
      });
    })
    .catch(next);
};

module.exports.getHashtags = (req, res, next) => {
  Hashtag.find()
    .then((data) => {
      res.status(200).send({
        data,
      });
    })
    .catch(next);
};


module.exports.updateHashtag = (req, res, next) => {
  Hashtag.findOneAndUpdate({code:req.params.hashtagCode},
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

module.exports.deleteHashtag = (req, res, next) => {
  Hashtag.findOneAndDelete({code:req.params.hashtagCode})
    .then((data) => res.send(data))
    .catch(next);
};



///

