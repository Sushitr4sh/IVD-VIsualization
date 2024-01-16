if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

/* Express */
const express = require("express");
const app = express();
const port = 3000;

/* Method Override */
const methodOverride = require("method-override");

/* Mongoose */
const mongoose = require("mongoose");

const path = require("path");

/* Mongoose Models */
const Patient = require("./models/patient");

/* EJS */
const ejsMate = require("ejs-mate");

const dbUrl = process.env.DB_URL;

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

app.post("/patients/search", async (req, res) => {
  const { patientId } = req.body;
  res.redirect(`/patients/${patientId}`);
});

app.get("/patients/:id", async (req, res) => {
  const { id } = req.params;
  const patient = await Patient.findOne({ patientId: id });
  console.log(patient);
  res.render("patients/index", { patient });
});

app.get("/setting/:id", async (req, res) => {
  const { id } = req.params;
  const patient = await Patient.findOne({ patientId: id });
  res.render("patients/setting", { patient });
});

app.get("/patients/:id/add-data", async (req, res) => {
  const { id } = req.params;
  const patient = await Patient.findOne({ patientId: id });
  res.render("patients/add-data", { patient });
});

app.get("/patients/:id/edit-profile", async (req, res) => {
  const { id } = req.params;
  const patient = await Patient.findOne({ patientId: id });
  res.render("patients/edit-profile", { patient });
});

app.put("/patients/:id/edit-profile", async (req, res) => {
  const { id } = req.params;
  const patient = await Patient.findOne({ patientId: id });
  patient.fullName = req.body.fullName;
  patient.roomNumber = req.body.roomNumber;
  patient.bedNumber = req.body.bedNumber;
  await patient.save();
  res.redirect(`/patients/${id}`);
});

app.post("/patients/:id/add-data", async (req, res) => {
  const { id } = req.params;
  const patient = await Patient.findOneAndUpdate(
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

  function convertDateFormat(inputDate) {
    // Split the input date string into an array [MM, DD, YYYY]
    const dateParts = inputDate.split("/");

    // Add leading zero to month and day if needed
    const month = dateParts[0].padStart(2, "0");
    const day = dateParts[1].padStart(2, "0");

    // Rearrange the date parts to form the output date string [YYYY, MM, DD]
    const outputDate = `${dateParts[2]}-${month}-${day}`;

    return outputDate;
  }

  const today = convertDateFormat(new Date().toLocaleDateString());
  console.log(today); // Output: "2024-01-08" (assuming today's date is January 8, 2024)

  //check if today's data exist
  if (
    !patient.bloodPressureHistory ||
    patient.bloodPressureHistory.length === 0
  ) {
    // If bloodPressureHistory is empty, create a new entry
    const newBloodPressureEntry = {
      date: today,
      time: [new Date().toLocaleTimeString()],
      systolic: [req.body.systolic],
      diastolic: [req.body.diastolic],
      meanPulse: [req.body.systolic - req.body.diastolic],
    };
    patient.bloodPressureHistory = [newBloodPressureEntry];
    await patient.save();
  } else if (
    patient.bloodPressureHistory[patient.bloodPressureHistory.length - 1]
      .date !== today
  ) {
    const newBloodPressureEntry = {
      date: today,
      time: [new Date().toLocaleTimeString().substr(0, 7)],
      systolic: [req.body.systolic],
      diastolic: [req.body.diastolic],
      meanPulse: [req.body.systolic - req.body.diastolic],
    };
    patient.bloodPressureHistory.push(newBloodPressureEntry);
    await patient.save();
  } else {
    patient.bloodPressureHistory[
      patient.bloodPressureHistory.length - 1
    ].time.push(new Date().toLocaleTimeString().substr(0, 7));
    patient.bloodPressureHistory[
      patient.bloodPressureHistory.length - 1
    ].systolic.push(req.body.systolic);
    patient.bloodPressureHistory[
      patient.bloodPressureHistory.length - 1
    ].diastolic.push(req.body.diastolic);
    patient.bloodPressureHistory[
      patient.bloodPressureHistory.length - 1
    ].meanPulse.push(req.body.systolic - req.body.diastolic);
    await patient.save();
  }

  res.redirect(`/patients/${id}`);
});

app.post("/createdAt", (req, res) => {
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
