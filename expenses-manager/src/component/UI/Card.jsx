import './Card.scss'
const Card = (props)=> {
    const cardClasses = 'card ' + props.className;
    return(
        <div className={cardClasses}>{props.children}</div>
    );
}

export default Card;