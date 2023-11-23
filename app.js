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

const helmet = require("helmet");

const path = require("path");

const moment = require("moment");

/* Mongoose Models */
const Patient = require("./models/patient");

/* EJS */
const ejsMate = require("ejs-mate");

/* Error Handlling */

/* Connect Mongo */
const MongoStore = require("connect-mongo");

const dbUrl =
  process.env.DB_URL || "mongodb://127.0.0.1:27017/ivdVisualization";

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(dbUrl);
  console.log("Database Connected");
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

app.get("/register-patient", (req, res) => {
  res.render("users/register-patient");
});

app.post("/register-patient", async (req, res) => {
  const patient = new Patient(req.body);
  await patient.save();
  res.redirect(`/${patient.patientId}`);
});

app.get("/search-patient", (req, res) => {
  res.render("users/search-patient");
});

app.post("/search-patient", (req, res) => {
  res.redirect("/chats");
});

app.get("/:patientId/add-data", async (req, res) => {
  const { patientId } = req.params;
  const patient = await Patient.findOne({ patientId: patientId });
  res.render("users/add-data", { patient });
});

app.post("/:patientId/add-data", async (req, res) => {
  const { patientId } = req.params;
  await Patient.findOneAndUpdate(
    { patientId: patientId },
    {
      bloodPressure: req.body.bloodPressure,
      meanPulse: req.body.meanPulse,
    }
  );
  res.redirect(`/${patientId}`);
});

app.get("/:patientId", async (req, res) => {
  const { patientId } = req.params;
  const patient = await Patient.findOne({ patientId: patientId });
  console.log(`This is query:` + patient);
  res.render("ivd/index", { patient });
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
