import { useState, useRef ,useEffect} from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [isValid,setIsValid] = useState(false)
  const [isTouched,setIsTouched] = useState(false)
  const nameRef = useRef();

  useEffect(()=>{
    if(isValid){
      console.log('A name has been passed');
    }
  },[isValid])

  const onBlurHandler = e =>{
    setIsTouched(true)
    if(enteredName.trim() === ''){
      setIsValid(false)
    }
  }

  const onNameChangeHandler = (e) => {
    setEnteredName(e.target.value);
    setIsTouched(true)
    if(enteredName.trim() !== ''){
      setIsValid(true)
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsTouched(true)
    if(enteredName.trim() === ''){
      setIsValid(false)
      return;
    }
    setIsValid(true)
    console.log(enteredName);

    const value = nameRef.current.value
    console.log(value);

    setEnteredName(' ')
  };

  const isEnteredInvalid = isTouched && !isValid

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
