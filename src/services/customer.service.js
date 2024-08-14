import { addressModel, customerModel } from "../models/index.js";

const findOneCustomer = async (filter) => {
  const data = await customerModel.findOne(filter);
  return data;
};

const findById = async (filter) => {
  const data = await customerModel
    .findOne(filter)
    .select(
      "-password -createdAt -updatedAt -cart -email -orders -address -phone"
    )
    .populate("wishlist");
  return data;
};

const findCustomerById = async (filter) => {
  const data = await customerModel
    .findOne(filter)
    .populate("address")
    .populate("wishlist")
    .populate("orders")
    .populate("cart");
  return data;
};

const findCustomerandUpdate = async (filter, update) => {
  const data = await customerModel.findOneAndUpdate(filter, update, {
    new: true,
  });
  return data;
};

const createCustomer = async (userData) => {
  const customerRef = new customerModel(userData);
  const userdata = await customerRef.save();
  return userdata;
};

const createAddress = async (address) => {
  const addressRef = new addressModel(address);
  const addressdata = await addressRef.save();
  return addressdata;
};

export default {
  findOneCustomer,
  findById,
  findCustomerById,
  findCustomerandUpdate,
  createCustomer,
  createAddress,
};
