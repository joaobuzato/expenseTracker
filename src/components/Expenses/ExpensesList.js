import ExpenseItem
 from "./ExpenseItem"

 import "./ExpensesList.css"

export default function ExpensesList(props) {

    if (props.items.length === 0 ) {
        return <h2 className="expenses-list__fallback">Found No Expenses.</h2>
    }
    if(props.items.length > 0) {
        return <ul className="expenses-list"> {props.items.map(expense => <ExpenseItem key={expense.id} expense={expense} />)}</ul>
    }

}