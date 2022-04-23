import React, { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const isValid = validateValue(enteredValue);
  const hasError = isTouched && !isValid;

  const onBlurHandler = (e) => {
    setIsTouched(true);
  };

  const onValueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
    setIsTouched(true);
  };

  function reset() {
    setEnteredValue("");
    setIsTouched(false);
  }

  return {
    value: enteredValue,
    hasError,
    isValid,
    onBlurHandler,
    onValueChangeHandler,
    reset,
  };
};

export default useInput;
