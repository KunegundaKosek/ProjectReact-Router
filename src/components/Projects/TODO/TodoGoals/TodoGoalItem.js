import React from 'react';
import classes from './TodoGoalItem.module.css';

const TodoGoalItem = (props) => {

  const deleteHandler = () => {
    props.onDelete(props.id)
  };

  return (
    <li className={classes['goal-item']} onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default TodoGoalItem;

