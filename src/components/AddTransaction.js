import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [ isExpense, setIsExpense] = useState(true);
  const [ date, setDate ] = useState('');
  const [ text, setText ] = useState('');
  const [ amount, setAmount ] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      isExpense,
      date,
      text,
      amount: isExpense ? -amount : +amount
    }

    setText('');
    setAmount(0);
    setIsExpense(true);
    addTransaction(newTransaction);  
  }

  console.log(date);

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label>Expense 
            <input 
              type="checkbox" 
              value={isExpense}
              onChange={(e) => setIsExpense(!isExpense)}
            />
            <span className="slider round"></span> Income
          </label>
        </div>
        <div className="form-control">
          <label htmlFor="date">Date:</label>
          <input 
            type="date" 
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="text">Description</label>
          <input 
            type="text" 
            placeholder="Enter text..." 
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount
          </label>
          <input 
            type="number" 
            placeholder="Enter amount..." 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}