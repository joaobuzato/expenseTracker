import Card from "../UI/Card"
import ExpenseItem from "./ExpenseItem"
import ExpensesFilter from "./ExpensesFilter"
import "./Expenses.css"
import {useState} from 'react';


export default function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020')
    const filterHandler = (year) => {
        setFilteredYear(year) 
    }
    return (
        <Card className="expenses">
            <ExpensesFilter selectedYear={filteredYear} onSelect={filterHandler}/>
            {props.expenses.map(expense => <ExpenseItem expense={expense} />)}
        </Card>
    )
}