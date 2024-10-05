import { CsvUploadRepository } from "../repository.js/csvupload.repository.js";

export class fileUploadController {
  constructor() {
    // Initialize the CsvUploadRepository to handle file-related operations
    this.repository = new CsvUploadRepository();
  }

  async UploadFile(req, res, next) {
    try {
      // Check if a file has been uploaded; if not, return an error response
      if (!req.file) {
        return res.status(400).send("No file uploaded.");
      }
      const file = req.file.filename; // Retrieve the uploaded file's filename
      await this.repository.uploadFile(file); // Call the repository method to upload the file
      return res.redirect('/'); // Redirect after successful upload
      // res.status(200).send(`File uploaded successfully: ${req.file.filename}`);
    } catch (err) {
      console.log(err); // Log any errors that occur during the upload process
    }
  }

  async viewFile(req, res, next) {
    try {
      const id = req.params.id; // Get the file ID from the request parameters

      const filedata = await this.repository.viewFile(id); // Retrieve file data from the repository
      if (filedata) {
        return res.status(200).render("viewDetails", { filedata }); // Render the view with the file data if found
      } else {
        return res.status(404).send("something went wrong"); // Send an error response if no file data is found
      }
    } catch (err) {
      console.log(err); // Log any errors that occur during file viewing
    }
  }

  async deleteFile(req, res, next) {
    try {
      const id = req.params.id; // Get the file ID from the request parameters
      const isDeleted = await this.repository.deleteFile(id); // Call the repository method to delete the file
      if (isDeleted) {
        // If deletion is successful, redirect to the API page
        return res.redirect('/');
      } else {
        return res.status(404).send("Something went wrong"); // Send an error response if deletion fails
      }
    } catch (err) {
      console.log(err); // Log any errors that occur during the delete process
    }
  }

  async ViewHompage(req, res, next) {
    try {
      const list = await this.repository.ShowAllFile(); // Retrieve all uploaded files from the repository
      if (list) {
        return res.status(200).render("fileUpload", { list: list }); // Render the homepage with the list of files
      } else {
        return res.status(404).send("No Uploaded File yet"); // Send an error response if no files are found
      }
    } catch (err) {
      console.log(err); // Log any errors that occur during the homepage retrieval
    }
  }
}
