const isMobileNumberValid = (ph) => {
    const regX = new RegExp(/^((?!(0))[0-9]{10})$/);
    return regX.test(ph);
  };
  
  const isNumericField = (num) => {
    const regX = new RegExp(/^\d*[.]?\d*$/);
    return regX.test(num.toString());
  };
  
  const isEmailValid = (email) => {
    const regX = new RegExp(
      /^[a-zA-Z0-9_]+(\.[_a-zA-Z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/
    );
    return regX.test(email);
  };
  
  const isPanNumberValid = (pan) => {
    const regX = new RegExp(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/);
    return regX.test(pan);
  };
  
  const isEmpty = (str) => {
    return str.length === 0 ? true : false;
  };
  
  export {
    isMobileNumberValid,
    isEmailValid,
    isEmpty,
    isNumericField,
    isPanNumberValid,
  };
  