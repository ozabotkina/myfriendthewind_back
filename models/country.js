const mongoose = require("mongoose");
const { regexLink,
  regexLatin, 
  regexRus, 
  regContinentCode,
  regCoverTitle,
  regCoverTitleEn, 
  regCountryCode
 } = require('../utils/regexBack')


const countrySchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
    index: true,
    validate: {
      validator(v) {
        return regCountryCode.test(v);
      },
      message: () => `2-3 latin caps`,
    },
  }, 

  title: {
    type: String,
    validate: {
      validator(v) {
        return regexRus.test(v);
      },
      message: () => `русские буквы и цифры`,
    },
  },

  coverTitle: {
    type: String,
    validate: {
      validator(v) {
        return regCoverTitle.test(v);
      },
      message: () => `русские буквы и цифры до 25`,
    },
  },

  titleEn: {
    type: String,
    validate: {
      validator(v) {
        return regexLatin.test(v);
      },
      message: () => `латинские буквы и цифры`,
    },
  },

  coverTitleEn: {
    type: String,
    validate: {
      validator(v) {
        return regCoverTitleEn.test(v);
      },
      message: () => `латинские буквы и цифры до 25`,
    },
  },

  picture: {
    type: String,
    validate: {
      validator(v) {
        return regexLink.test(v);
      },
      message: () => `ссылка`,
    },
  },

  coverPic: {
    type: String,
    validate: {
      validator(v) {
        return regexLink.test(v);
      },
      message: () => `ссылка`,
    },
  },

  continent: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return regContinentCode.test(v);
      },
      message: () => `2 latin caps`,
    },

  },
});

module.exports = mongoose.model("country", countrySchema);
