import React, { useState } from 'react';
import TodoGoalList from './TodoGoals/TodoGoalList';
import TodoInput from './TodoGoals/TodoInput';
import './Todo.css';

const Todo = () => {

    const [todoGoals, setTodoGoals] = useState([
        { text: 'Przeczytać książkę', id: 'g1' },
        { text: 'Ukończyć kurs React', id: 'g2' }
    ]);

    const addGoalHandler = (enteredText) => {
        setTodoGoals((prevState) => {
            const updatedGoals = [...prevState];
            updatedGoals.unshift({ text: enteredText, id: Math.random().toString })
            return updatedGoals;
        });
    };

    const deleteItemHandler = (goalId) => {
        setTodoGoals((prevState) => {
            const updatedGoals = prevState.filter(goal => goal.id !== goalId);
            return updatedGoals;
        })
    };

    let content = (
        <p style={{ textAlign: 'center' }}>Nie znaleziono zadań. Może dodać jedno?</p>
    );

    if (todoGoals.length > 0) {
        content = (
            <TodoGoalList items={todoGoals} onDeleteItem={deleteItemHandler} />
        )
    }


    return (
        <div >
            <section id='goal-form'>
                <TodoInput onAddTodo={addGoalHandler} />
            </section>

            <section id='goals'>
                {content}

            </section>
        </div>
    );
};

export default Todo;

