const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientSchema = new Schema({
  fullName: {
    type: String,
  },
  patientId: {
    type: String,
  },
  gender: {
    type: String,
    enum: ["Male", "Female"],
  },
  dateOfBirth: {
    type: Date,
    required: true,
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

module.exports = mongoose.model("Patient", patientSchema);
