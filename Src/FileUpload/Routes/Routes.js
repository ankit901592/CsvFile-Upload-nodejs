import { fileUploadController } from "../controller/CsvUpload.controller.js";
import express from "express";

import { upload } from "../../middelware.js/multer.js";
const FileUploadController = new fileUploadController();
const FileRouter = express.Router();

FileRouter.post("/fileUpload", upload.single("fileUrl"), (req, res, next) => {
  FileUploadController.UploadFile(req, res, next);
});
FileRouter.get("/", (req, res, next) => {
  FileUploadController.ViewHompage(req, res, next);
});

FileRouter.get("/delete/:id", (req, res, next) => {
  FileUploadController.deleteFile(req, res, next);
});
FileRouter.get("/view/:id", (req, res, next) => {
  FileUploadController.viewFile(req, res, next);
});

export default FileRouter;
