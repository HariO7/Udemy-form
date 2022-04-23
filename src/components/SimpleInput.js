import useInput from "../hooks/use-Input";

const SimpleInput = (props) => {
  const {
    hasError,
    isValid,
    value: enteredName,
    onBlurHandler,
    onValueChangeHandler,
    reset,
  } = useInput((value) => value.trim() !== "");

  const {
    hasError: hasErrorEmail,
    value: enteredEmail,
    isValid: isEmailValid,
    onBlurHandler: onEmailBlurHandler,
    onValueChangeHandler: onEmailChangeHandler,
    reset: emailreset,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (isValid && isEmailValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (!isValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);

    reset();
    emailreset();
  };

  const formClass = hasError ? "form-control invalid" : "form-control ";
  const formClassEmail = hasErrorEmail
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={submitHandler}>
      <div className={formClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={onValueChangeHandler}
          value={enteredName}
          onBlur={onBlurHandler}
        />
      </div>
      {hasError && <p className="error-text">A name is required</p>}
      <div className={formClassEmail}>
        <label htmlFor="email">Your email</label>
        <input
          type="text"
          id="email"
          onChange={onEmailChangeHandler}
          value={enteredEmail}
          onBlur={onEmailBlurHandler}
        />
      </div>
      {hasErrorEmail && <p className="error-text">A email is required</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
