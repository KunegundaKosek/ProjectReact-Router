import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./components/HomePage/HomePage";
import Navbar from './components/Navbar';
import ExpensePage from './components/Projects/Expenses/ExpensesPage';

function App() {


  return (
    <div>
      {/* <ExpensesPage /> */}
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/expenses' element={<ExpensePage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
