import express      from "express";
import config       from "../config";
import initializeDb from "../db";
import middleware   from "../middleware";

let router = express();

initializeDb(db => {
  // connexion à la db
  router.use(middleware({ config, db }));
  // routes api
});

export default router;
