import validator from "validator";

const validateLogin = (data) => {
  let errors = {};

  const { username, password } = data;

  if (validator.isEmpty(username)) {
    errors.username = "Username field is required.";
  }

  if (validator.isEmpty(password)) {
    errors.password = "Password field is required.";
  }

  return {
    isInvalid: Object.keys(errors).length > 0,
    errors: errors,
  };
};

export default validateLogin;
