import validator from "validator";

const validateSignup = (data) => {
  let errors = {};

  const { username, password, password1 } = data;

  if (localStorage.users) {
    let lsUsers = localStorage.users;

    lsUsers = JSON.parse(lsUsers);
    let index = lsUsers.findIndex((user) => user.username === username);
    
    if (index > -1) {
      errors.username = "Username already exists!";
    }
  }

  if (validator.isEmpty(username)) {
    errors.username = "Username is required";
  }

  if (validator.isEmpty(password)) {
    errors.password = "Password is required";
  }

  if (!validator.equals(password, password1)) {
    errors.password2 = "Password not matching";
  }

  if (validator.isEmpty(password1)) {
    errors.password2 = "Password is required.";
  }

  return {
    isInvalid: Object.keys(errors).length > 0,
    errors: errors,
  };
};

export default validateSignup;
