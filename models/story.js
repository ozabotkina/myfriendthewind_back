// const { text } = require("body-parser");
const mongoose = require("mongoose");
// const { regexLink,
//   regexLatin, 
//   regexRus, 
//   regContinentCode,
//   regCoverTitle,
//   regCoverTitleEn, 
//   regTripCode, 

//  } = require('../utils/regexBack')


const storySchema = new mongoose.Schema({
  country:{
    type: String,
  },

  trip: {
    type: String,
    // pattern: "[A-Z][A-Z][A-Z]?[0-9][0-9]",
    ref: "trip",
    // можно ли сделать проверку на наличие такой позиции в trips
  },

  title: {
    // название дня, выводим на странице
    type: String,
    maxlength: 50,
  },

  titleEn: {
    // название дня, выводим на странице
    type: String,
    maxlength: 50,
  },

  dayNumber: {
    type: Number,
  },

  date: {
    type: Date,
  },

  coverTitle: {
    type: String,
    maxlength: 30,
  },

  coverTitleEn: {
    type: String,
    maxlength: 30,
  },

  picsPath: {
    type: String,
  },

  coverPic: {
    type: String,
    // ссылка на картинку link, проверка регулярным выражением
  },


  body: {
    type: String,
  },

  bodyEn: {
    type: String,
  },


  code: {
    type: String,
    pattern: "[A-Z][A-Z][A-Z]?[0-9]{4}",
  },
});

module.exports = mongoose.model("story", storySchema);
