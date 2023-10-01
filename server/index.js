import express from "express";
import http from "http";
import dotenv from "dotenv";
import connectDB from "./db.js";
import cors from "cors";
import fileUpload from "express-fileupload";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
  }),
);

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  console.log(`AI-Video-Summary ${process.env.PORT}`);
});
