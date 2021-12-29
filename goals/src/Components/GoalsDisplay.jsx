import React, { useState } from "react";
import CardForm from "./CardForm";
import GoalItemsList from "./GoalItemsList";
import './GoalsDisplay.scss'

const GoalsDisplay = () => {

    let goalItem = []

    const [goals, setGoals] = useState(goalItem)

    const saveGoalsHandlers = (addedGoals) => {
        //console.log(addedGoals)
        setGoals((prevGoalArr) => {
            return [addedGoals, ...prevGoalArr]
        }
        );
    }

    const deleteItemHandler = goalId => {
        setGoals(prevGoals => {
            //console.log('in display', goalId)
            const updatedGoals = prevGoals.filter(goal => goal.courseGoalId !== goalId);
            //console.log('updated goals', updatedGoals)
            return updatedGoals;
        });
    };

    return (
        <div className="display">
            <CardForm onSaveGoals={saveGoalsHandlers} goal={goals} />
            <GoalItemsList goalsList={goals} onDeleteItem={deleteItemHandler} />
        </div>
    )

}

export default GoalsDisplay;