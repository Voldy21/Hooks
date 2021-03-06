import React from 'react';
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpense from './components/IncomeExpense'
import TransactionList from './components/TransactionList'
import TransactionForm from './components/TransactionForm'
import {GlobalProvider} from './context/GlobalState'

function App() {
  

  return (
    <GlobalProvider>   
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpense />
        <TransactionList />
        <TransactionForm />
      </div>
    </GlobalProvider>
  );
}

export default App;