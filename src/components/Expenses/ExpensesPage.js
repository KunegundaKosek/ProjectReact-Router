import React, { useState } from 'react';
import NewExpense from './NewExpenses/NewExpense';

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Komputer',
        amount: 5499,
        date: new Date(2023, 2, 2),
    },
    { id: 'e2', title: 'Nowe biurko', amount: 499, date: new Date(2023, 1, 12) },
    {
        id: 'e3',
        title: 'Naprawa samochodu',
        amount: 1299,
        date: new Date(2023, 2, 28),
    },
    {
        id: 'e4',
        title: 'Nowe pluszowe misie',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];

const ExpensesPage = () => {

    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = () => {
        setExpenses((prevExpenses) => {
            return [expenses, ...prevExpenses]; 
        });
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
        </div>
    );
};

export default ExpensesPage;