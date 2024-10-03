import mongoose from "mongoose";

// Define the schema for the file upload model
const fileUploadSchema = mongoose.Schema({
  filename: {
    type: String, // The name of the uploaded file
    required: true, // This field is required
  },
  createdAt: {
    type: Date, // The date the file was uploaded
    default: Date.now, // Set the default value to the current date and time
  },
});

// Create and export the model based on the file upload schema
export const fileModel = new mongoose.model("fileUpload", fileUploadSchema);
