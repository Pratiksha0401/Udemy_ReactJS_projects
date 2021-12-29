import React, { useState } from "react";
import styles from './CardForm.module.scss'

const CardForm = (props) => {
    const initialGoal = {
        goalTitle: ''
    }

    const [goals, setGoals] = useState(initialGoal);
    const [isValid, setIsVAlid] = useState(true)

    const inputValue = (event) => {
        if (event.target.value.trim().length > 0) {
            setIsVAlid(true)
        }
        setGoals({ ...goals, [event.target.name]: event.target.value })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        //console.log("submit", goals)
        let goalData = {
            courseGoalId: Math.random(),
            courseGoalTitle: goals.goalTitle
        }
        if (goals.goalTitle.trim().length === 0) {
            setIsVAlid(false);
            return;
        }
        props.onSaveGoals(goalData)
        setGoals(initialGoal)

    }

    return (
        <div className="card">
            <form className={`${styles['form-content']} ${!isValid && styles.invalid}`}
                onSubmit={submitHandler}>
                <label>Course Goals</label>
                <input
                    type='text' value={goals.goalTitle}
                    onChange={inputValue} name="goalTitle" autoComplete="off" />
                <button type="submit">Add</button>
            </form>
        </div>
    )

}

export default CardForm;