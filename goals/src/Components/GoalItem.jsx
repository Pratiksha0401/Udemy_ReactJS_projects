import React from "react";
import './GoalItem.scss'

const GoalItem = (props) =>{
    
    const deleteHandler = () => {
        //console.log(props.goalId);
        props.onDelete(props.goalId);
        console.log('(Deleted!)');
      };
    

    return(
        <div className="item" onClick={deleteHandler}>
            {props.goalTitle}
        </div>
        )
}

export default GoalItem;