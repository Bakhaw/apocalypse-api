import mongoose from "mongoose";

export default callback => {
  let db = mongoose.connect("mongodb://localhost/apo_db");
  callback(db);
};
