import ViewCsvFile from "../../middelware.js/csvfile.js";
import { fileModel } from "../Schema/fileUpload.schema.js";

export class CsvUploadRepository {
  // Method to upload a new file to the database
  async uploadFile(file) {
    try {
      const upload = new fileModel({
        filename: file, // Store the uploaded filename
        createdAt: new Date(), // Record the upload date and time
      });

      upload.save(); // Save the file information to the database
    } catch (err) {
      console.log(err); // Log any errors that occur during the upload process
    }
  }

  // Method to retrieve a file's data based on its filename
  async viewFile(fileName) {
    try {
      const file = await fileModel.findOne({ filename: fileName }); // Find the file by its filename
      if (file) {
        const filedata = ViewCsvFile(fileName); // Process the file data using the middleware function
        return filedata; // Return the file data if found
      } else {
        return null; // Return null if no file is found
      }
    } catch (err) {
      console.log(err); // Log any errors that occur during the file retrieval process
    }
  }

  // Method to delete a file from the database based on its filename
  async deleteFile(name) {
    try {
      const isDeleted = await fileModel.deleteOne({ filename: name }); // Attempt to delete the file
      if (isDeleted) {
        return isDeleted; // Return the deletion status
      } else {
        return null; // Return null if deletion fails
      }
    } catch (err) {
      console.log(err); // Log any errors that occur during the delete process
    }
  }

  // Method to retrieve all uploaded files from the database
  async ShowAllFile() {
    try {
      const allUploads = await fileModel.find(); // Fetch all uploaded files
      if (allUploads) {
        return allUploads; // Return the list of all uploaded files
      } else {
        return null; // Return null if no uploads are found
      }
    } catch (err) {
      console.log(err); // Log any errors that occur during the retrieval process
    }
  }
}
