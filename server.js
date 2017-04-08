import express from "express";
import dbConfig from "./config/db";
import middlewareConfig from "./config/middlewares";

import { TransactionRoutes } from "./modules";

const app = express();

dbConfig();

middlewareConfig(app);

app.use("/api", TransactionRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, err => {
  if (err) {
    console.log(err);
  }
  {
    console.log(`money-backend listening to port: ${PORT}`);
  }
});
