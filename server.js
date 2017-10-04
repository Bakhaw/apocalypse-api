import express    from "express";
import bodyParser from "body-parser";
import mongoose   from "mongoose";
import config     from ".config";
import routes     from "./routes";

const app = express();

app.use("/v1", routes);

app.listen(config.port);
console.log(`Connection on port ${config.port}`);

export default app;
