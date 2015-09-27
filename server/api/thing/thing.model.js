'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThingSchema = new Schema({
  name: String,
  email: String,
  github: String
});

module.exports = mongoose.model('Thing', ThingSchema);
