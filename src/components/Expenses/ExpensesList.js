import React from "react";
import ExpenseItem from "./ExpenseItemes";

import './ExpensesList.css'

const ExpensesList = props => {

    if(props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }

    return (
        <ul className="expenses-list">
            {props.items.map(expens =>
                <li><ExpenseItem
                key={expens.id}
                title={expens.title}
                amount={expens.amount}
                date={expens.date}
                /></li>
            )}
        </ul>
    )
}

export default ExpensesList;