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
  const [id, setId] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = JSON.parse(localStorage.getItem('expenses'));
    return savedExpenses || [];
  });
  const [totalExpenses, setTotalExpenses] = useState(() => {
    const savedTotal = JSON.parse(localStorage.getItem('totalExpenses'));
    return savedTotal || 0;
  });
  const [foodExpenses, setFoodExpenses] = useState(() => {
    const savedTotal = JSON.parse(localStorage.getItem('foodExpenses'));
    return savedTotal || 0;
  });
  const [transportExpenses, setTransportExpenses] = useState(() => {
    const savedTotal = JSON.parse(localStorage.getItem('transportExpenses'));
    return savedTotal || 0;
  });
  const [entertainmentExpenses, setEntertainmentExpenses] = useState(() => {
    const savedTotal = JSON.parse(localStorage.getItem('entertainmentExpenses'));
    return savedTotal || 0;
  });

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
    localStorage.setItem('totalExpenses', JSON.stringify(totalExpenses));
    localStorage.setItem('foodExpenses', JSON.stringify(foodExpenses));
    localStorage.setItem('transportExpenses', JSON.stringify(transportExpenses));
    localStorage.setItem('entertainmentExpenses', JSON.stringify(entertainmentExpenses));
  }, [expenses, totalExpenses, foodExpenses, transportExpenses, entertainmentExpenses]);

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
      if (isEditing) {
        const updatedExpenses = expenses.map(expense =>
          expense.id === id ? { id, expenseName, amountValue, categoryValue } : expense
        );
        setExpenses(updatedExpenses);
        setIsEditing(false);
        setId('');
      } else {
        const newExpense = { id: uuidv4(), expenseName, amountValue, categoryValue };
        setExpenses([...expenses, newExpense]);
        setTotalExpenses(totalExpenses + parseInt(amountValue));
      }

      if (categoryValue === 'Food') {
        setFoodExpenses(foodExpenses + parseInt(amountValue));
      } else if (categoryValue === 'Transport') {
        setTransportExpenses(transportExpenses + parseInt(amountValue));
      } else {
        setEntertainmentExpenses(entertainmentExpenses + parseInt(amountValue));
      }

      setExpenseName('');
      setAmountValue('');
      setCategoryValue('');
    }
  };

  const deleteTile = (id) => {
    const newExpenses = expenses.filter(expense => expense.id !== id);
    const deletedExpense = expenses.find(expense => expense.id === id);
    setExpenses(newExpenses);
    setTotalExpenses(totalExpenses - parseInt(deletedExpense.amountValue));

    if (deletedExpense.categoryValue === 'Food') {
      setFoodExpenses(foodExpenses - parseInt(deletedExpense.amountValue));
    } else if (deletedExpense.categoryValue === 'Transport') {
      setTransportExpenses(transportExpenses - parseInt(deletedExpense.amountValue));
    } else {
      setEntertainmentExpenses(entertainmentExpenses - parseInt(deletedExpense.amountValue));
    }
  };

  const editTile = (id) => {
    const expenseToEdit = expenses.find(expense => expense.id === id);
    setExpenseName(expenseToEdit.expenseName);
    setAmountValue(expenseToEdit.amountValue);
    setCategoryValue(expenseToEdit.categoryValue);
    setId(expenseToEdit.id);
    setIsEditing(true);
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
      <Button type="primary" onClick={click}>
        {isEditing ? 'Update' : 'Submit'}
      </Button>
      {expenses.length > 0 && (
        <div>
          <h3>Total Expenses: ₹{totalExpenses}</h3>
          <h3>Food Expenses: ₹{foodExpenses}</h3>
          <h3>Transport Expenses: ₹{transportExpenses}</h3>
          <h3>Entertainment Expenses: ₹{entertainmentExpenses}</h3>
        </div>
      )}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
        {expenses.map((expense, index) => (
          <ExpenseTile
            key={expense.id}
            id={expense.id}
            expenseName={expense.expenseName}
            amountValue={expense.amountValue}
            categoryValue={expense.categoryValue}
            deleteTile={deleteTile}
            editTile={editTile}
          />
        ))}
      </div>
    </div>
  );
}

export default ExpenseForm;
