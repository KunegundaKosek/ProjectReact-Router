import React from 'react';
import classes from './ExpensesFilter.module.css';

const ExpensesFilter = (props) => {

  const dropdownChangeHandler = (e) => {
    props.onChangeFilter(e.target.value);
  }

  return (
    <div className={classes['expenses-filter']}>
      <div className={classes['expenses-filter__control']}>
        <label>Filter By Year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2023'>2023</option>
          <option value='2024'>2024</option>
          <option value='2025'>2025</option>
          <option value='2026'>2026</option>
          <option value='2027'>2027</option>
          <option value='2028'>2028</option>
          <option value='2029'>2029</option>
          <option value='2030'>2030</option>

        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;