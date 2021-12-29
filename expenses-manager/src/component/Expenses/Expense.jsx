import React, { useState } from 'react';
import './Expense.scss'
import ExpenseItem from "../Expenses/ExpenseItem";
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpenseChart';

const Expense = (props) => {

    const [selectFilterYear, setSelectFilterYear] = useState('2020')

    const filterHandler = (filteredYear) => {
        setSelectFilterYear(filteredYear)
    }

    const filterExpensesList = props.item.filter((res) => {
        return res.date.getFullYear().toString() === selectFilterYear
    }
    )
    //worked without toString as well
    // const filterArrList = props.item.filter((res) => res.date.getFullYear()==selectFilterYear)
    // console.log(filterArrList)

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={selectFilterYear} onSelectOfYear={filterHandler} />
            <ExpenseChart expenses={filterExpensesList}/>
            <ExpensesList items={filterExpensesList}/>
            {/* {expensesList.length === 0 ? (<h1 className='not_found'>No Items Found</h1>) :
                (
                    expensesList.map((expense) =>
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date} />
                    )
                )
            } */}

        </Card>

    )
}

export default Expense;