import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");

  const nameRef = useRef();

  const onNameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(enteredName);

    const value = nameRef.current.value
    console.log(value);

    setEnteredName(' ')
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameRef}
          type="text"
          id="name"
          onChange={onNameChangeHandler}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
