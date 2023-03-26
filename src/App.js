
import { useState } from "react";
import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenseList = [
    {id: 1, title: "Cursos", amount: 32.00, date: new Date(2023, 5, 1)},
    {id: 2, title: "Livros", amount: 300.99, date: new Date(2023, 2, 1)},
    {id: 3, title: "Jogos", amount: 123.09, date: new Date(2023, 8, 1)}
  ]
  const [expenses, setExpenses] = useState(expenseList)
  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => [ expense, ...prevExpenses])
  }
  
  return (
    <>
    <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
    <Expenses expenses={expenses}></Expenses>
    </>
  );
}

export default App;
