import { customerModel } from "../models/index.js";

const findOneCustomer = async (filter) => {
  const data = await customerModel.findOne(filter);
  return data;
};

const createCustomer = async (userData) => {
  const customerRef = new customerModel(userData);
  const userdata = await customerRef.save();
  return userdata;
};

export default { findOneCustomer, createCustomer };
