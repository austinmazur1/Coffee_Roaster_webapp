import mongoose from "mongoose";

const BeanSchema = new mongoose.Schema({
  name: { type: String, required: true },
  origin: { type: String, required: true },
  process: { type: String, required: true },
  elevation: { type: String, required: true },
  notes: { type: [String], required: true },
  roastLevel: { type: String, required: true },
  brewMethods: { type: [String], required: true },
  roaster: { type: mongoose.Schema.Types.ObjectId, ref: "Roaster" },
});

const Beans = mongoose.model("Bean", BeanSchema);

export default Beans;
