import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import db from "./config/mongo";

const app = express();
const PORT = process.env.PORT || 3031;
app.use(cors());
app.use(express.json());

app.use(router);
db().then(() => {
  console.log("Conexión ready");
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT} 🚀`);
});
