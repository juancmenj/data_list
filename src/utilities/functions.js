export function validateEmail(value, errors) {
  let validate = {
    valid: false,
    errorMsg: ""
  };

  const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;

  if (value !== "") {
    if (regexEmail.test(value)) {
      validate.valid = true;
    } else {
      validate.errorMsg = errors[1];
    }
  } else {
    validate.errorMsg = errors[0];
  }

  return validate;
}

export function validatePassword(value, errors, firstPasswordValue = "", passwordConfirm = false) {
  let validate = {
    valid: false,
    errorMsg: ""
  };
  //const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;

  if (value !== "") {
    //if (regexEmail.test(value)) {
    if (passwordConfirm) {
      if (firstPasswordValue === value) {
        validate.valid = true;
      } else {
        validate.errorMsg = errors[1];
      }
    } else {
      validate.valid = true;
    }
    //}else {
    //validate.errorMsg = "La contraseña no cumple con el minimo de seguridad.";
    //}
  } else {
    validate.errorMsg = errors[0];
  }

  return validate;
}