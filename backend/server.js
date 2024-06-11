const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const cors = require("cors");

// Import routes
const userRoute = require("./routes/userRoute");
const orderRoute = require("./routes/orderRoute");

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected Successfully");
    app.listen(process.env.PORT || 5000, (err) => {
      if (err) console.log(err);
      console.log(`Running at port ${process.env.PORT}`);
    });
  })
  .catch((error) => console.log("Failed to connect", error));

// Routes
app.use("/users",userRoute);
app.use("/orders",orderRoute);
