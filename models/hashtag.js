const mongoose = require("mongoose");

const hashtagSchema = new mongoose.Schema({
    code:{
      type: String,
      unique: true,
      index: true,
  
    },
    
    coverTitle: {
      type: String,
      maxlength: 30,
      unique: true,
      index: true,
  
    },
  
    coverTitleEn: {
      type: String,
      maxlength: 30,
      unique: true,
      index: true,
  
    },
  
    coverPic: {
      type: String,
    },

    picture: {
      type: String,
    },
  
  
    });
  
  module.exports = mongoose.model("hashtag", hashtagSchema);
  