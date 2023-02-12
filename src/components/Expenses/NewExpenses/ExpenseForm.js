import React, { useState } from 'react';
import classes from './ExpenseForm.module.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

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

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
    };

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
    };

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className={classes['new-expense__controls']}>
                <div className={classes['new-expense__control']}>
                    <label>Tytuł</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                </div>

                <div className={classes['new-expense__control']}>
                    <label>Cena</label>
                    <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler} />
                </div>

                <div className={classes['new-expense__control']}>
                    <label>Data</label>
                    <input type='date' min='2023-01-01' max='2030-12-31' value={enteredDate} onChange={dateChangeHandler} />
                </div>

            </div>

            <div className={classes['new-expense__actions']}>
                <button onClick={props.onCancel} type='button'>Zamknij</button>
                <button type='submit'>Dodaj wydatek</button>
            </div>
        </form>
    );
};

export default ExpenseForm;