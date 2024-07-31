import mongoose, { Schema } from "mongoose";

const customerSchema = Schema({}, { timestamps: true, versionKey: false });
const Customer = mongoose.model("Customer", customerSchema);

export default Customer;
