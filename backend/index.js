require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const adminRoutes = require("./routes/adminRoutes.js");

connectDB();

const app = express();
const port = process.env.PORT;

app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.json({ urlEncoded: true }));

app.get("/hello", (req, res) => {
  res.status(200).json({ message: "Hello" });
});

app.use("/api/auth", authRoutes);
app.use("/api/employee/leave", employeeRoutes);
app.use("/api/admin", adminRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
