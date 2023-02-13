import React from 'react';
import TodoGoalItem from './TodoGoalItem';
import classes from './TodoGoalList.module.css';

const TodoGoalList = (props) => {
    return (
        <ul className={classes['goal-list']}>
            {props.items.map(goal => (
                <TodoGoalItem
                    key={goal.id}
                    id={goal.id}
                    onDelete={props.onDeleteItem}
                >
                    {goal.text}
                </TodoGoalItem>
            ))}
        </ul>
    );
};


export default TodoGoalList;

