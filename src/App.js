
import { useState } from "react";
import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenseList = [
    {title: "Cursos", amount: 32.00, date: new Date(2023, 5, 1)},
    {title: "Livros", amount: 300.99, date: new Date(2023, 2, 1)},
    {title: "Jogos", amount: 123.09, date: new Date(2023, 8, 1)}
  ]
  const [expenses, setExpenses] = useState(expenseList)
  const addExpenseHandler = expense => {
    console.log("In App.js")
    setExpenses((prevExpenses) => [...prevExpenses, expense])
  }
  
  return (
    <>
    <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
    <Expenses expenses={expenses}></Expenses>
    </>
  );
}

export default App;
