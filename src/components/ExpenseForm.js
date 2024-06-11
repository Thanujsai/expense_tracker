import React, { useState, useEffect } from 'react';
import { Input, Button } from 'antd';
import { AutoComplete } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import ExpenseTile from './ExpenseTile';

const options = [
  { value: 'Food' },
  { value: 'Transport' },
  { value: 'Entertainment' },
];

function ExpenseForm() {
  const [expenseName, setExpenseName] = useState('');
  const [amountValue, setAmountValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('');
  const [id,setId] = useState('');
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = JSON.parse(localStorage.getItem('expenses'));
    return savedExpenses || [];
  });
  const [totalExpenses, setTotalExpenses] = useState(() => {
    const savedTotal = JSON.parse(localStorage.getItem('totalExpenses'));
    return savedTotal || 0;
  });

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
    localStorage.setItem('totalExpenses', JSON.stringify(totalExpenses));
    localStorage.setItem('id',id);
  }, [expenses, totalExpenses]);

  const handleExpenseNameChange = (e) => {
    setExpenseName(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmountValue(e.target.value);
  };

  const handleCategoryChange = (value) => {
    setCategoryValue(value);
  };

  const click = () => {
    if (expenseName && amountValue && categoryValue) {
      setId(uuidv4()); 
      const newExpense = { id: id, expenseName, amountValue, categoryValue };
      setExpenses([...expenses, newExpense]);
      setTotalExpenses(totalExpenses + parseInt(amountValue));
      setExpenseName('');
      setAmountValue('');
      setCategoryValue('');
    }
  };

  return (
    <div>
      <Input
        placeholder="Expense Name"
        style={{ width: '200px' }}
        value={expenseName}
        onChange={handleExpenseNameChange}
      /><br /><br />
      <Input
        placeholder="Amount"
        style={{ width: '200px' }}
        value={amountValue}
        onChange={handleAmountChange}
      /><br /><br />
      <AutoComplete
        style={{ width: 200 }}
        options={options.map((option) => ({
          label: option.value,
          value: option.value,
        }))}
        placeholder="Category"
        value={categoryValue}
        onChange={handleCategoryChange}
      /><br /><br />
      <Button type="primary" onClick={click}>Submit</Button>
      {expenses.length > 0 && (
        <div>
          <h3>Total Expenses: ₹{totalExpenses}</h3>
        </div>
      )}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
        {expenses.map((expense, index) => (
          <ExpenseTile
            key={index}
            expenseName={expense.expenseName}
            amountValue={expense.amountValue}
            categoryValue={expense.categoryValue}
          />
        ))}
      </div>
    </div>
  );
}

export default ExpenseForm;
