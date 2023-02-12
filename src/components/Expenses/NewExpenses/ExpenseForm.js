import React, { useState } from 'react';

import classes from './ExpenseForm.module.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className={classes['new-expense__controls']}>
                <div className={classes['new-expense__control']}>
                    <label>Tytuł</label>
                    <input
                        type='text'
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className={classes['new-expense__control']}>
                    <label>Cena</label>
                    <input
                        type='number'
                        min='0.01'
                        step='0.01'
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className={classes['new-expense__control']}>
                    <label>Data</label>
                    <input
                        type='date'
                        min='2023-01-01'
                        max='2030-12-31'
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className={classes['new-expense__control']}>
                <button type="button" onClick={props.onCancel}>Zamknij</button>
                <button type='submit'>Dodaj wydatek</button>
            </div>
        </form>
    );
};

export default ExpenseForm;