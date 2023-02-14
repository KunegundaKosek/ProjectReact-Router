import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from "./components/HomePage/HomePage";
import Navbar from './components/Navbar';
import Counter from "./components/Projects/Counter/Counter";
import ExpensePage from './components/Projects/Expenses/ExpensesPage';
import Todo from "./components/Projects/TODO/Todo";

function App() {


  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/expenses' element={<ExpensePage />} />
          <Route path='/todo' element={<Todo />} />
          <Route path='counter' element={<Counter />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
