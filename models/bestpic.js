const mongoose = require("mongoose");

const bestpicSchema = new mongoose.Schema({

  country: {
    type: String,
  }, 

  tripCode: {
    type: String,
  }, 

  coverPic: {
    type: String,
  },

  orientation: {
    type: String,
  },


  title: {
    type: String,
    minlength: 3,
    maxlength: 20,
  },

  titleEn: {
    type: String,
    minlength: 3,
    maxlength: 20,
  },

  hashtags: {
    type: Array
  },

  year: {
    type: Number
  },

  link: 
  {
    type: String
  }
});

module.exports = mongoose.model("bestpic", bestpicSchema);
