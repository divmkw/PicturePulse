const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/user-routes");
const adminRouter = require("./routes/admin-routes");
const movieRouter = require("./routes/movie-routes");
const bookingsRouter = require("./routes/booking-routes");
const cors = require("cors");
dotenv.config();
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);
app.use("/booking", bookingsRouter);

mongoose
  .connect(
    `mongodb+srv://naitiksolanki:${process.env.MONGODB_PASSWORD}@cluster0.02myww1.mongodb.net/picture-pulse-db?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() =>
    app.listen(5000, () =>
      console.log(`Connected To Database | Server is running on port ${5000}`)
    )
  )
  .catch((e) => console.log(e));
