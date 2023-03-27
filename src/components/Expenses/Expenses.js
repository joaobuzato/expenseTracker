import Card from "../UI/Card"
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter"
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css"
import {useState} from 'react';


export default function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2023')

    const filteredExpenses = props.expenses.filter(expense => new Date(expense.date).getFullYear().toString() === filteredYear )
    const filterHandler = (year) => {
        setFilteredYear(year) 
    }
    return (
        <Card className="expenses">
            <ExpensesFilter selectedYear={filteredYear} onSelect={filterHandler}/>
            <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
            <ExpensesList items={filteredExpenses} />
        </Card>
    )
}