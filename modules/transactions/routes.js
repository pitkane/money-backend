import { Router } from "express";
import * as TransactionController from "./controller";

const routes = new Router();

routes.post("/transaction", TransactionController.createTransaction);

export default routes;
