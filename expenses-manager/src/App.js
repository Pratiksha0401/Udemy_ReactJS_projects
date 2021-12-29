import React , {useState} from "react";
import Expense from "./component/Expenses/Expense";
import NewExpense from "./component/NewExpense/NewExpense";

const initialExpenses = [
  {
      id: 'e1',
      title: 'News Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
  }
];

function App() {
  const [expenses , setExpenses] = useState(initialExpenses)
  
  const newExpenseHandler = (expense) =>{
    //setExpenses([expense, ...expenses])
    setExpenses((prevExpenseArr) => {
      return [expense, ...prevExpenseArr]  }
    );
  }
  
  return (
    <div>
      <NewExpense OnNewExpenseData={newExpenseHandler}/>
      <Expense item={expenses}/>
    </div>
  );
}

export default App;
