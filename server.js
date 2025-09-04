import express from "express";
import { config } from "dotenv";
config({ path: './.env' });
import cors from "cors";
import configRoutes from "./routes/configRoute.js";

const app = express();

app.use(express.json());
app.use(cors());


configRoutes(app);

const PORT = process.env.PORT ;
app.listen(PORT, () => console.log('server to RiddleGame running .. '));