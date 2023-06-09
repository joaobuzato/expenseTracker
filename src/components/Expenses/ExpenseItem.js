import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

export default function ExpenseItem(props) {
    const expenseDate = props.expense.date
    const expenseTitle = props.expense.title
    const expenseAmout = props.expense.amount

    return (
        <li>
            <Card className="expense-item">
            <ExpenseDate date={expenseDate} />
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">R$ {expenseAmout}</div>
            </div>
            
        </ Card>
        </li>
    );
}