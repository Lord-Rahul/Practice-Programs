import { boolean } from "webidl-conversions";
import mongoose from "mongoose";

const employeeschema = new mongoose.Schema({

  name: String,
  salary: Number,
  language: String,
  city : String,
  isManager : Boolean


});

const employee = mongoose.model('employee', employeeschema);

export default employee