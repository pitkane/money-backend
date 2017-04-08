import mongoose from "mongoose";

export default () => {
  mongoose.promise = global.Promise;
  mongoose.connect("mongodb://localhost:/money");
  mongoose.connection
    .once("open", () => console.log(`Mongodb running`))
    .on("error", err => console.log(err));
};
