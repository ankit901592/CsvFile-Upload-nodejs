# File Upload API

This API allows users to upload, view, and delete files, as well as access a homepage. The API is built using `Express` and file upload is handled using `Multer`.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
  - [POST /fileUpload](#post-fileupload)
  - [GET /](#get-homepage)
  - [GET /delete/:id](#get-deleteid)
  - [GET /view/:id](#get-viewid)
- [Middleware](#middleware)
- [Controller](#controller-methods)

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Install the dependencies:
   ```bash
   npm install


POST /fileUpload
Description: Upload a file via a form field named fileUrl.

Request Type: POST

Request Body:

The file must be uploaded using multipart/form-data.
The key for the file should be fileUrl.
Middleware:

upload.single('fileUrl'): This middleware is used to handle the file upload with Multer.
Response: A confirmation of the file upload, including metadata or error if the upload fails.

Example:

bash
Copy code
curl -F "fileUrl=@path/to/file.csv" http://localhost:<PORT>/fileUpload
GET /
Description: Access the homepage of the file upload system.

Request Type: GET

Response: Displays the homepage or a welcome message.

Example:

bash
Copy code
curl http://localhost:<PORT>/
GET /delete/
Description: Deletes a file by its unique ID.

Request Type: GET

URL Parameters:

id: The unique identifier of the file to delete.
Response: A confirmation message on successful deletion or an error message if the file does not exist.

Example:

bash
Copy code
curl http://localhost:<PORT>/delete/123
GET /view/
Description: View a file by its unique ID.

Request Type: GET

URL Parameters:

id: The unique identifier of the file to view.
Response: The file's content or its details.

Example:

bash
Copy code
curl http://localhost:<PORT>/view/123
Middleware
Multer: Used to handle file uploads. Files are uploaded via the upload.single() middleware, which processes single file uploads sent through the fileUrl field
