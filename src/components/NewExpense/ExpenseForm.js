import "./ExpenseForm.css"
import { useState } from "react"
export default function ExpenseForm() {
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState()
    const [date, setDate] = useState()

    // const [userInput, setUserInput ] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const titleChangeHandler = (event) => {
        setTitle(event.target.value)
        // setUserInput((prevState) => {return {
        //     ...prevState,
        //     enteredDate:event.target.value,
        // }})
    }
    const amountChangeHandler = (event) => {
        setAmount(event.target.value)
        // setUserInput((prevState) => {return {
        //     ...prevState,
        //     enteredDate:event.target.value,
        // }})
    }
    const dateChangeHandler = (event) => {
        setDate(event.target.value)
        // setUserInput((prevState) => {return {
        //     ...prevState,
        //     enteredDate:event.target.value,
        // }})
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title,
            amount,
            date
        }
        console.log(expenseData)

    }
    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>TItle</label>
                <input type='text' onChange={titleChangeHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input onChange={amountChangeHandler}type='number' min="0.01" step="0.01"></input>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input onChange={dateChangeHandler}type='date' min="2019-01-01" max="2022-12-31"></input>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </div>
    </form>
}