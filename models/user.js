const { required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  dateOfBirth: {
    type: Date,
    required: true,
  },
  patientId: {
    type: String,
  },
  bloodPressure: {
    type: String,
    default: "",
  },
  meanPulse: {
    type: String,
    default: "",
  },
  heartRate: {
    type: String,
    default: "",
  },
  spo2: {
    type: String,
    default: "",
  },
  rr: {
    type: String,
    default: "",
  },
  bmi: {
    type: String,
    default: "",
  },
  bodyTemperature: {
    type: String,
    default: "",
  },
  bodyWeight: {
    type: String,
    default: "",
  },
  bodyHeight: {
    type: String,
    default: "",
  },
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
