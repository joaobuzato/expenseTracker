import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"
import { useState } from "react"
const NewExpense = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    function newExpenseClickHandler(){
        setIsOpen(wasOpen => !wasOpen)
    }
    const saveHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: (Math.random() *1000).toString()
        };
        props.onAddExpense(expenseData)
        setIsOpen(wasOpen => !wasOpen)
    }

    let newExpenseSection
    if(!isOpen){
      newExpenseSection = (<button onClick={newExpenseClickHandler}>Add New Expense</button>)
    } else {
      newExpenseSection = (<ExpenseForm onSaveExpenseData={saveHandler} onCancel={newExpenseClickHandler}></ExpenseForm>)
    }
    
    return <div className="new-expense">
        {newExpenseSection}
    </div>
}
export default NewExpense