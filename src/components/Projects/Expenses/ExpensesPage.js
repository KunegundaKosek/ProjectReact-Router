import React, { useState } from 'react';
import Expenses from './Expenses/Expenses';
import NewExpense from './NewExpenses/NewExpense';
import './ExpensesPage.css';

const DUMMY_EXPENSES = [
    {
        id: 'e1', title: 'Nowy komputer', amount: 5499, date: new Date(2023, 8, 2),
    },
    {
        id: 'e2', title: 'Nowe biurko', amount: 499, date: new Date(2023, 1, 12)
    },
    {
        id: 'e3', title: 'Naprawa samochodu', amount: 1299, date: new Date(2023, 2, 28),
    },
    {
        id: 'e4', title: 'Nowe pluszowe misie', amount: 450, date: new Date(2021, 5, 12),
    },

    {
        id: 'e5', title: 'Nowe pluszowe misie', amount: 450, date: new Date(2023, 5, 12),
    },

    {
        id: 'e6', title: 'Nowa karta graficzna', amount: 13999, date: new Date(2024, 9, 30),
    },

    {
        id: 'e7', title: 'Nowe mieszkanie', amount: 500000, date: new Date(2026, 4, 10),
    },

    {
        id: 'e8', title: 'Zakup Hondy', amount: 130000, date: new Date(2025, 1, 7),
    },

];

const ExpensesPage = () => {

    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
};

export default ExpensesPage;