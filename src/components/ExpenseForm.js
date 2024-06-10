import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { AutoComplete } from 'antd';
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
  const [atleastOneExpense, setAtleastOneExpense] = useState(false);

  const expense = (e) => {
    setExpenseName(e.target.value);
  }

  const amount = (e) => {
    setAmountValue(e.target.value);
  }

  const category = (value) => {
    setCategoryValue(value);
  }

  const click = () => {
    if (expenseName && amountValue && categoryValue) {
      setAtleastOneExpense(true);
    }
  }

  return (
    <div>
      <Input placeholder="Expense Name" style={{ width: '200px' }} onChange={expense} /><br /><br />
      <Input placeholder="Amount" style={{ width: '200px' }} onChange={amount} /><br /><br />

      <AutoComplete
        style={{ width: 200 }}
        options={options.map((option) => ({
          label: option.value,
          value: option.value,
        }))}
        placeholder="Category"
        onChange={category}
      /><br /><br />
      <Button type="primary" onClick={click}>Submit</Button>
      {atleastOneExpense && <ExpenseTile expenseName={expenseName} amountValue={amountValue} categoryValue={categoryValue} />}

    </div>
  )
}

export default ExpenseForm;
