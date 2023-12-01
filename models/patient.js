const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientSchema = new Schema({
  fullName: {
    type: String,
  },
  patientId: {
    type: String,
    unique: true,
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
  systolic: {
    type: Number,
    default: null,
  },
  diastolic: {
    type: Number,
    default: null,
  },
  meanPulse: {
    type: Number,
    default: null,
  },
  heartRate: {
    type: Number,
    default: null,
  },
  spo2: {
    type: Number,
    default: null,
  },
  rr: {
    type: Number,
    default: null,
  },
  bmi: {
    type: String,
    default: "",
  },
  bodyTemperature: {
    type: Number,
    default: null,
  },
  bodyWeight: {
    type: Number,
    default: null,
  },
  bodyHeight: {
    type: Number,
    default: null,
  },
  bloodPressureHistory: [
    {
      date: {
        type: String,
      },
      time: [
        {
          type: String,
        },
      ],
      systolic: [
        {
          type: Number,
        },
      ],
      diastolic: [
        {
          type: Number,
        },
      ],
      meanPulse: [
        {
          type: Number,
        },
      ],
    },
  ],
  heartRateHistory: [
    {
      date: {
        type: String,
      },
      time: [
        {
          type: String,
        },
      ],
      heartRate: [
        {
          type: Number,
        },
      ],
      heartBeatCount: [
        {
          type: Number,
        },
      ],
    },
  ],
});

module.exports = mongoose.model("Patient", patientSchema);
