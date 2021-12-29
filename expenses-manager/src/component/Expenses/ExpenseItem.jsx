import './ExpenseItem.scss'
import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { Button } from 'react-bootstrap';

const ExpenseItem = (props) => {

    // const [title , setTitle] = useState(props.title)

    // const clickHandler = () => {
    //     setTitle("Updated")
    //     console.log("Updated!!!")
    // }
    //console.log(props)
    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
                </div>
                {/* <Button variant="secondary" onClick={clickHandler}>Click To Update Title</Button> */}
            </Card>
        </li>
    );
}

export default ExpenseItem;