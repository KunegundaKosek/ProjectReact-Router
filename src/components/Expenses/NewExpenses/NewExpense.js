import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import classes from './NewExpense.module.css';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(true);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }

        props.onAddExpense(expenseData);
        // setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className={classes['new-expense']}>
            {!isEditing && <button onClick={startEditingHandler}>Dodaj nowy wydatek</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}

            {/* {isEditing ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} /> : <button onClick={startEditingHandler}>Dodaj nowy wydatek</button>} */}
        </div>
    );
};

export default NewExpense;