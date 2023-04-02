const mongoose = require("mongoose");
const { regexLink,
  regexLatin, 
  regexRus, 
  regCoverTitle,
  regCoverTitleEn, 
  regTripCode, 

 } = require('../utils/regexBack')


const tripSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
    index: true,
    // validate: {
    //   validator(v) {
    //     return regTripCode.test(v);
    //   },
    //   message: () => `2-3 latin caps, 2 digits`,
    // },
  }, 

  title: {
    type: String,
    // validate: {
    //   validator(v) {
    //     return regexRus.test(v);
    //   },
    //   message: () => `русские буквы и цифры`,
    // },
  },

  coverTitle: {
    type: String,
    // validate: {
    //   validator(v) {
    //     return regCoverTitle.test(v);
    //   },
    //   message: () => `русские буквы и цифры до 25`,
    // },
  },

  titleEn: {
    type: String,
    // validate: {
    //   validator(v) {
    //     return regexLatin.test(v);
    //   },
    //   message: () => `латинские буквы и цифры`,
    // },
  },

  coverTitleEn: {
    type: String,
    // validate: {
    //   validator(v) {
    //     return regCoverTitleEn.test(v);
    //   },
    //   message: () => `латинские буквы и цифры до 25`,
    // },
  },

  picsPath: {
    type: String,
    // validate: {
    //   validator(v) {
    //     return regexLink.test(v);
    //   },
    //   message: () => `ссылка`,
    // },
  },

  coverPic: {
    type: String,
  },

  countries: {
    type: String,
    required: true,
  },


  hashtags: {
    type: String,
  },

  issueDate: {
    type: Date,
    required: true
  },
});

module.exports = mongoose.model("trip", tripSchema);
