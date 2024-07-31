const customResponse = (message, data = {}) => {
  return {
    success: true,
    message,
    data,
  };
};

const customError = (error) => {
  return {
    success: false,
    message: error.message || "Something Went wrong!",
  };
};

export default { customResponse, customError };
