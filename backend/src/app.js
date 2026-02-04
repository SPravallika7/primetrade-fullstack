const express = require("express");
const cors = require("cors");


const routes = require("./routes");

const app = express();

/* Middlewares  */
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use(express.json());


/*  Routes  */
app.use("/api/v1", routes);

/*  Health Check  */
app.get("/", (req, res) => {
  res.json({ success: true, message: "API running " });
});

/*  Global Error Handler  */
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Server Error"
  });
});

module.exports = app;
