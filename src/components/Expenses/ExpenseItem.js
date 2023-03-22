import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

import { useState } from 'react'

export default function ExpenseItem(props) {
    const expenseDate = props.expense.date
    const expenseTitle = props.expense.title
    const expenseAmout = props.expense.amount

const clickHandler = () => {
    setTitle("Update!")
    console.log(title)
}

    const [title, setTitle ] = useState(expenseTitle)
    return (
        <Card className="expense-item">
            <ExpenseDate date={expenseDate} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">R$ {expenseAmout}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </ Card>
    );
}