import React, { useState } from 'react';
import Button from '../UI/Button.js';
import classes from './TodoInput.module.css';

const TodoInput = (props) => {

  const [isValid, setIsValid] = useState(false);
  const [enteredValue, setEnteredValue] = useState('');

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddTodo(enteredValue);
  };

  const todoInputChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(e.target.value);
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${classes['form-control']} ${!isValid && classes.invalid}`}>
        <label>Do zrobienia</label>
        <input type='text' onChange={todoInputChangeHandler} />
      </div>
      <Button type='submit'>Dodaj cel</Button>
    </form>
  );
};

export default TodoInput;

