import mongoose from "mongoose";

const Port = "mongodb://localhost:27017/FileUpload";
const connect = async () => {
  await mongoose.connect(Port);
  console.log("mongo is connected");
};

export default connect;
