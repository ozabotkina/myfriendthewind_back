const mongoose = require("mongoose");

const pictagschema = new mongoose.Schema({
  code: {
    type: String,
    maxlength: 30,
    unique: true,
    index: true,

    
  },

    title: {
      type: String,
      maxlength: 30,
      unique: true,
      index: true,
  
      
    },
  
    titleEn: {
      type: String,
      maxlength: 30,
      unique: true,
      index: true,
  
    },
    
    });
  
  module.exports = mongoose.model("pictag", pictagschema);
  