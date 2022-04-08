import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import webV1 from "../route/www/v1";

const app = express();
const PORT = process.env.PORT || 5000;

createConnection()
  .then(async (connection) => {
    app.use(express.json());
    app.use("*", webV1);
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  })
  .catch((error) => console.log(error));
