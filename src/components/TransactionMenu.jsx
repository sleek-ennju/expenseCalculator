import { useState } from "react";


const TransactionMenu = ({handleIncome, handleExpense}) => {
  const [menu, setMenu] = useState(false);
  const [amount, setAmount] = useState('');
  const [title, setTitle] = useState('');
  const [transactionType, setTransactionType] = useState('expense');
  const [data, setData] = useState([]);

  const toggleBtn = ()=> setMenu(!menu);
  const handleAmount = (e) => setAmount(e.target.value);
  const handleTitle = (e) => setTitle(e.target.value);
  const handleTransactionType = (e) => setTransactionType(e.target.value);
  const handleSubmit = (e) =>{
    e.preventDefault();

    const obj = {
      id: data.length+1,
      amount: amount,
      title:title,
      transaction: transactionType
    }

    if(!amount || !title){
      alert('Please confirm that you have set an amount and title for this transaction to be approved');
      return;
    }
    if(transactionType === 'income'){
      handleIncome(+amount);
    }else{
      handleExpense(+amount);
    }
    
    setData(prevData => [...prevData, obj ]);
    setAmount('');
    setTitle('');
    setTransactionType('expense');
    setMenu(!menu);
  }
  return (
    <div>
      <div className="btn-container">
        <button
          onClick={toggleBtn}
        >Add Transaction</button>
      </div>
      {menu && 
        (
          <div>
            <div className="formContainer">
              <input 
              required
              type="number"
              placeholder="Enter Amount"
              value={amount}
              onChange={handleAmount}
              />
              <input 
              required
              type="text"
              placeholder="Enter Title"
              value={title}
              onChange={handleTitle}
              />
              <select
                value={transactionType}
                onChange={handleTransactionType}
              >
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
              <button
                className="submitbtn"
                onClick={handleSubmit}
              >Add</button>
            </div>
          </div>
        )
      }
      {data.length > 0 && data.map(dt => (
              <div className="notification" 
              key={dt.id} 
              style={dt.transaction === 'expense' ? {backgroundColor: 'red'} : {backgroundColor: 'green'}}>
                <p>{dt.title}</p>
                <p>{dt.amount}</p>
              </div>
            )
          )
        }
      
    </div>
  )
}

export default TransactionMenu;