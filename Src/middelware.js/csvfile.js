import csvtojson from "csvtojson";
import path from "path";
import { fileURLToPath } from "url"; // Import to resolve __dirname

async function ViewCsvFile(fileName) {
  try {
    // Get the current directory in ES module
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    // Use the path module to resolve the file path correctly
    const filePath = path.resolve(__dirname, "../../Public/Uploads", fileName);

    // Convert CSV to JSON
    const data = await csvtojson().fromFile(filePath);

    // Log the JSON data
    // console.log(data);
    return data; // Optionally return the data
  } catch (error) {
    console.error("Error while reading CSV file:", error);
  }
}

export default ViewCsvFile;
