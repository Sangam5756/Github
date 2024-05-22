import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import passport from "passport";
import session from "express-session";
import path, { dirname } from "path";

import "./passport/github.auth.js"

import userRoute from "./routes/user.route.js";
import exploreRoute from "./routes/explore.route.js";
import authRoutes from "./routes/auth.route.js";

import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();


const corsOptions = { 
  origin: 'http://localhost:3000', // Allow requests from this origin
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};
 
const app = express();
app.use(cors(corsOptions))
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve()

console.log("__dirname", __dirname)


app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());



// app.get("/", (req, res) => {
//   res.send("Server is Ready");
// });

app.use("/api/auth",authRoutes);
app.use("/api/users", userRoute);
app.use("/api/explore",exploreRoute);


app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});


app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
  connectMongoDB();
});
