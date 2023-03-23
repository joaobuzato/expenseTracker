import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

import { useState } from 'react'

export default function ExpenseItem(props) {
    const expenseDate = props.expense.date
    const expenseTitle = props.expense.title
    const expenseAmout = props.expense.amount

    return (
        <Card className="expense-item">
            <ExpenseDate date={expenseDate} />
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">R$ {expenseAmout}</div>
            </div>
            
        </ Card>
    );
}