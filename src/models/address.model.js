import mongoose, { Schema } from "mongoose";

const AddressSchema = Schema(
  {
    name: { type: String, required: true },
    street: { type: String, required: true },
    postalCode: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);
const Address = mongoose.model("Address", AddressSchema);

export default Address;
