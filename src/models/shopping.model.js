import mongoose, { Schema } from "mongoose";

const shoppingSchema = Schema({}, { timestamps: true, versionKey: false });
const Shopping = mongoose.model("Shopping", shoppingSchema);

export default Shopping;
