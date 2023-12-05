import TransactionMenu from "./TransactionMenu";
import { useState } from "react";

const Balance = () => {
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const onIncome = amount =>{
    setIncome(income + amount);
    setBalance(balance + amount);
  }
  const onExpense = amount =>{
    setExpense(expense + amount);
    setBalance(balance - amount);
  }

  return (
    <div className="displayContainer">
        <h1>Balance: <span>{balance}</span></h1>

        <div className="displayContainer_pair">
            <p>Income: <span>{income}</span></p>
            <p>Expense: <span>{expense}</span></p>
        </div>

        <TransactionMenu handleIncome={onIncome} handleExpense={onExpense}/>
    </div>
  )
}

export default Balance;