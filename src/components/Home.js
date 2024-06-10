import React from 'react';
import { Input } from 'antd';
import ExpenseForm from './ExpenseForm';

function Home() {
  return (
    <div>
      Welcome Home<br></br>
      <div style={{ marginBottom: '20px' }}></div>
      <ExpenseForm />
    </div>
  )
}

export default Home
