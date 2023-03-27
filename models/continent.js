const { regexLink,
        regexLatin, 
        regexRus, 
        regContinentCode,
        regCoverTitle,
        regCoverTitleEn
       } = require('../utils/regexBack')
const mongoose = require("mongoose");

const continentSchema = new mongoose.Schema({

  code: {
    type: String,
    required: true,
    unique: true,
    index: true,
    validate: {
      validator(v) {
        return regContinentCode.test(v);
      },
      message: () => `2 latin caps`,
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

  // countries: 
  //   {
  //     type: [String],
  //     message: () => `список кодов стран`,
  //   },
});

module.exports = mongoose.model("continent", continentSchema);
