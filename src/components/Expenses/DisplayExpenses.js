import { useState } from "react";
import Card from "../UI/Card";
import './DisplayExpenses.css'
import ExpensesFilter from "../NewExpense/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const DisplayExpenses = (props)=>{

  const [filteredYear, setFilteredYear] = useState('2020');
    
    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear)
    }

    const filteredExpense = props.expenses.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
      <div>
    <Card className="expenses">
      <ExpensesFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler}/>
      <ExpensesChart expenses = {filteredExpense}/>
      <ExpensesList items = {filteredExpense}/>
    </Card>
    </div>
    )
}
export default DisplayExpenses;