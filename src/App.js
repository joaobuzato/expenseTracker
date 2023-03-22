
import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {title: "Cursos", amount: 32.00, date: new Date(2023, 5, 1)},
    {title: "Livros", amount: 300.99, date: new Date(2023, 2, 1)},
    {title: "Jogos", amount: 123.09, date: new Date(2023, 8, 1)}
  ]
  return (
    <>
    <NewExpense></NewExpense>
    <Expenses expenses={expenses}></Expenses>
    </>
  );
}

export default App;
