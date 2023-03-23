import "./ExpenseDate.css"

export default function ExpenseDate(props){
    const expenseDate = new Date(props.date)
    console.log("date" + expenseDate)
    const month = expenseDate.toLocaleString("pt-BR", {month: "long"})
    const day = expenseDate.toLocaleString("pt-BR", { day: "2-digit"})
    const year = expenseDate.getFullYear()
    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    )
}