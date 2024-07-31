import mongoose, { Schema } from "mongoose";

const orderSchema = Schema(
  {
    orderId: { type: String, required: true },
    customerId: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, required: true },
    txnId: { type: String, required: true },
    items: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        unit: { type: Number, required: true },
      },
    ],
  },
  { timestamps: true, versionKey: false }
);
const Order = mongoose.model("Order", orderSchema);

export default Order;
