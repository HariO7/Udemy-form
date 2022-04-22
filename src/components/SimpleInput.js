import { useState, useRef ,useEffect} from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [isTouched,setIsTouched] = useState(false)
  const nameRef = useRef();
  const isValid = enteredName.trim() !== ""
  const isEnteredInvalid = isTouched && !isValid



  const onBlurHandler = e =>{
    setIsTouched(true)
    
  }

  const onNameChangeHandler = (e) => {
    setEnteredName(e.target.value);
    setIsTouched(true)
    
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsTouched(true)
    
    console.log(enteredName);

    setEnteredName(' ')
    setIsTouched(false)
  };


  const formClass = isEnteredInvalid ? 'form-control invalid' : 'form-control '


  return (
    <form onSubmit={submitHandler}>
      <div className={formClass}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameRef}
          type="text"
          id="name"
          onChange={onNameChangeHandler}
          value={enteredName}
          onBlur={onBlurHandler}
        />
      </div>
      {isEnteredInvalid && <p className="error-text">A name is required</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
