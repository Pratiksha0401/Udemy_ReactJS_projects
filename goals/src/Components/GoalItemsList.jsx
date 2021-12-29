import React from "react";
import GoalItem from "./GoalItem";
import './GoalItemsList.scss'

const GoalItemsList = (prpos) => {
    //console.log("list", prpos.goalsList);

    const goalsArr = prpos.goalsList;
    //console.log("arr", goalsArr.courseGoalTitle);
    
    return(
        <div className="item-list">
            {goalsArr.map( (data) => 
            (<GoalItem 
            key={data.courseGoalId} 
            goalTitle={data.courseGoalTitle}
            goalId={data.courseGoalId}
            onDelete={prpos.onDeleteItem}
            />
            ))}
        </div>
    )
}

export default GoalItemsList;