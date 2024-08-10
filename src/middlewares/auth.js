import customerService from "../services/customer.service.js";
import { helper, responseWrapper } from "../utils/index.js";
const authorization = async (req, res, next) => {
  try {
    const token = req.get("Authorization").split(" ")[1];
    const tokenData = await helper.validateSignatute(token);
    const userData = await customerService.findOneCustomer({
      _id: tokenData.id,
    });
    if (!userData) throw new Error("Not a valid user!");
    req.currentUser = userData;
    next();
  } catch (error) {
    res.status(401).send(responseWrapper.customError(error));
  }
};

export default authorization;
