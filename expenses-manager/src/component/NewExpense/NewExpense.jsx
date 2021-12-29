import React, { useState } from 'react';
import './NewExpense.scss'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const OnSaveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.OnNewExpenseData(expenseData)
    }

    const editingHandler = () => {
        setIsEditing(true)
    }

    const stopEditing = () => {
        setIsEditing(false)
    }

    return (
        <div className='new-expense'>
            {!isEditing ?  (<button onClick={editingHandler}> Add New Expense</button>) 
                        : (<ExpenseForm onSaveExpenseData={OnSaveExpenseHandler} onCancelHandler={stopEditing} />) }
        </div>
    );
}

export default NewExpense;