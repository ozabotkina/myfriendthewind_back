const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
  login: {
    type: String,
    maxlength: 30,
    unique: true,
    index: true, 
  },

    password: {
      type: String,
    },
      
    });
  
  module.exports = mongoose.model("user", userschema);
