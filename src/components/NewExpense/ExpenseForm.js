import {React, useState} from "react";
import './ExpenseForm.css'

const ExpenseForm = (props)=>{
    const [enterdTitle, setEnteredTitle] = useState()
    const [enterdAmount, setEnteredAmount] = useState()
    const [enterdDate, setEnteredDate] = useState()
    // const [userInput, setUserInput] = useState({
    //     enterdedTitle:'',
    //     enterdedAmount:'',
    //     enterdedDate:''
    // })

    const titleChangeHandler = (event)=>{
        setEnteredTitle(event.target.value)
        // setUserInput({...userInput, enterdedTitle:event.target.value});
        // setUserInput((prevState)=>({...prevState, enterdedTitle:event.target.value}));
    }
    const amountChangeHandler = (event)=>{
        setEnteredAmount(event.target.value)
        // setUserInput({...userInput, enterdedAmount:event.target.value});
    }
    const dateChangeHandler = (event)=>{
        setEnteredDate(event.target.value)
        // setUserInput({...userInput, enterdedDate:event.target.value});
    }

    const submitHandler = (event)=>{
        event.preventDefault();

        const expenseData = {
            title: enterdTitle,
            amount: enterdAmount,
            date: new Date(enterdDate)
        };
        props.onSaveExpenseData(expenseData)
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }


    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value={enterdTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' value={enterdAmount} onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2022-12-31' value={enterdDate} onChange={dateChangeHandler}/>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </div>
    </form>
};

export default ExpenseForm;