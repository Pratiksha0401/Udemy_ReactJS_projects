import React from "react";
import './ChartBar.scss'

const ChartBar = (props) => {

    //console.log(props.label)

    let filledHeight = '0%';

    if(props.maxValue > 0){
        filledHeight = Math.round((props.value / props.maxValue) * 100) + '%'
    }

    return(
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" 
                    style={{height : filledHeight}}></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    )
}

export default ChartBar;