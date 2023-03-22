import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"
const NewExpense = (props) => {

    const saveHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: (Math.random() *1000).toString()
        };
        props.onAddExpense(expenseData)
    }
    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveHandler}></ExpenseForm>
    </div>
}
export default NewExpense