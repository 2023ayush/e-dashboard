import express from "express";
import mongoose from "mongoose";
const connectDB = async () => {
  mongoose
    .connect(
      "mongodb+srv://guragainaayush7:uGa8zKUpLX3PtyUJ@cluster0.zmn4btw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
      console.log("connected to database");
    })
    .catch((err) => {
      console.log("failed connection");
    });
};
const app = express();
connectDB();
app.listen(5000, () => {
  console.log(`Server listening on port ${5000}`);
});
