import dotenv from "dotenv";
dotenv.config();
import path from 'path';

import express, { Express } from "express";
import { router } from "./router";


const app: Express = express();
const port = process.env.PORT ?? 4000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});