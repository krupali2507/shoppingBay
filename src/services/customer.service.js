import { customerModel } from "../models/index.js";

const findOneCustomer = async (filter) => {
  const data = await customerModel.findOne(filter);
  return data;
};

const createCustomer = async (userData) => {
  const customerRef = new customerModel(userData);
  const data = await customerRef.save();
  return data;
};

export default { findOneCustomer, createCustomer };
