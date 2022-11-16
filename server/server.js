const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const db = require("./src/utils/database/database");
const activitiesRoutes = require("./src/api/activities/activities.routes");
const teamsRoutes = require("./src/api/teams/teams.routes");
dotenv.config();
db.connectDb();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH, DELETE");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

const PORT = process.env.PORT || 8000;

app.use("/activities", activitiesRoutes); // IMPORTANTEAhora si pones en insomnia http://localhost:5000/new (en post) te va a dejar subir, si hubieras puesto '/user', pues para haer POST sería en insomnia http://localhost:5000/user/new
app.use("/teams", teamsRoutes); // IMPORTANTEAhora si pones en insomnia http://localhost:5000/new (en post) te va a dejar subir, si hubieras puesto '/user', pues para haer POST sería en insomnia http://localhost:5000/user/new

//---------Esto es la general------------
app.use("*", (req, res, next) => {
  return res.status(404).json("Ruta no encontrada");
});

app.use((error, req, res, next) => {
  return res
    .status(error.status || 500)
    .json(error.status || "Error inesperado");
});

app.listen(PORT, () => {
  console.log(`El servidor está reaaaady mann en http://localhost:${PORT}`);
});
