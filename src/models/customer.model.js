import mongoose, { Schema } from "mongoose";

const customerSchema = Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    address: [{ type: Schema.Types.ObjectId, ref: "Address", require: true }],
    cart: [
      {
        product: { type: Schema.Types.ObjectId, ref: "Product", require: true },
        unit: { type: Number, require: true },
      },
    ],
    wishlist: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
        require: true,
      },
    ],
    orders: [{ type: Schema.Types.ObjectId, ref: "Order", require: true }],
  },
  { timestamps: true, versionKey: false }
);
const Customer = mongoose.model("Customer", customerSchema);

export default Customer;
