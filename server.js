import express from "express";
import connect from "./Src/config/mongoose.config.js";
import path from "path";
import FileRouter from "./Src/FileUpload/Routes/Routes.js";
const App = express();

App.use(express.json());
App.use(express.urlencoded({ extended: true }));

App.use(express.static("Public"));

App.set("view engine", "ejs");
App.set("views", "./Src/Views");

App.use(express.static("Src/Views"));
App.use("/api/", FileRouter);

App.listen("3500", () => {
  console.log("server is running on port server http://localhost:3500/api/");
  connect();
});
