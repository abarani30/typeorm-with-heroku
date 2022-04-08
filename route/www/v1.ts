import * as express from "express";
import MyController from "../../controllers/www";

const route = express.Router();

// my first route
route.get("", MyController.sayHello);

export default route;
