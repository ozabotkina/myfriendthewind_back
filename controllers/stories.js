const NotFound = require("../utils/errors/NotFound");
const BadRequest = require("../utils/errors/BadRequest");
const Conflict = require("../utils/errors/Conflict")
const Story = require("../models/story");

module.exports.createStory = (req, res, next) => {
  // const { title, date, cover, coverTitle, body } = req.body;

  Story.create({
    country: req.body.country,
    trip: req.body.trip,
    dayNumber: req.body.dayNumber,
    date: req.body.date,
    title: req.body.title,
    titleEn: req.body.titleEn,
    coverTitle: req.body.coverTitle,
    coverTitleEn: req.body.coverTitleEn,
    picsPath: req.body.picsPath,
    coverPic: req.body.coverPic,
    body: req.body.body,
    bodyEn: req.body.bodyEn,
    code: req.body.trip + req.body.dayNumber.toString().padStart(2, 0),
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

module.exports.getStory = (req, res, next) => {
  Story.findOne({ code: req.params.storyCode })
    .then((data) => {
      if (!data) {
        throw new NotFound();
      } else {
        res.status(200).send({ data });
      }
    })
    .catch(next);
};

module.exports.getStories = (req, res, next) => {
  Story.find(req.body.param)
    .then((data) => {
      if (!data) {
        throw new NotFound();
      } else {
        res.status(200).send({ data });
      }
    })
    .catch(next);
};



module.exports.updateStory = (req, res, next) => {
  Story.findOneAndUpdate(
    { code: req.params.storyCode },
    {
      country: req.body.country,
      trip: req.body.trip,
      dayNumber: req.body.dayNumber,
      date: req.body.date,
      title: req.body.title,
      titleEn: req.body.titleEn,
      coverTitle: req.body.coverTitle,
      coverTitleEn: req.body.coverTitleEn,
      picsPath: req.body.picsPath,
      coverPic: req.body.coverPic,
      body: req.body.body,
      bodyEn: req.body.bodyEn
      // storyCode: req.body.trip+req.body.dayNumber.toString().padStart(2,0)
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

module.exports.deleteStory = (req, res, next) => {
  Story.findOneAndDelete({ code: req.params.storyCode })
    .then((data) => res.send(data))
    .catch(next);
};
