if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

/* Express */
const express = require("express");
const app = express();
const port = 3000;

/* Mongoose */
const mongoose = require("mongoose");

const methodOverride = require("method-override");

const path = require("path");

const moment = require("moment");

/* Mongoose Models */
const Patient = require("./models/patient");

/* EJS */
const ejsMate = require("ejs-mate");
const patient = require("./models/patient");

const dbUrl =
  process.env.DB_URL || "mongodb://127.0.0.1:27017/ivdVisualization";

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(dbUrl);
  console.log(`Database Connected to ${dbUrl}`);
}

/* View Engine */
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

/* Middleware etc */
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

app.get("/test", (req, res) => {
  res.render("test");
});

app.get("/register", (req, res) => {
  res.render("patients/register-patient");
});

app.post("/register", async (req, res) => {
  const patient = new Patient(req.body);
  await patient.save();
  res.redirect(`/patients/${patient.patientId}`);
});

app.get("/patients/search", (req, res) => {
  res.render("patients/search-patient");
});

/* app.post("/patients/search/:id", (req, res) => {
  res.redirect("/chats");
}); */

app.get("/patients/:id", async (req, res) => {
  const { id } = req.params;
  const patient = await Patient.findOne({ patientId: id });
  res.render("patients/index", { patient });
});

app.get("/patients/:id/add-data", async (req, res) => {
  const { id } = req.params;
  const patient = await Patient.findOne({ patientId: id });
  res.render("patients/add-data", { patient });
});

app.post("/patients/:id/add-data", async (req, res) => {
  const { id } = req.params;
  await Patient.findOneAndUpdate(
    { patientId: id },
    {
      systolic: req.body.systolic,
      diastolic: req.body.diastolic,
      bloodPressure: `${req.body.systolic}/${req.body.diastolic}`,
      meanPulse: req.body.systolic - req.body.diastolic,
      heartRate: req.body.heartRate,
      spo2: req.body.spo2,
      rr: req.body.rr,
      bmi: req.body.bmi,
      bodyTemperature: req.body.bodyTemperature,
      bodyWeight: req.body.bodyWeight,
      bodyHeight: req.body.bodyHeight,
    }
  );
  res.redirect(`/patients/${id}`);
});

app.post("/createdAt", (req, res) => {
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
