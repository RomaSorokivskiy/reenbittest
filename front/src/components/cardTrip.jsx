import "../stylesheets/cardTrip.scss"

const CardTrip = ({props}) => {
    return(
        <div className="card_trip">
            <div className="img">

            </div>
            <h4>{props.city}</h4>
            <h5>{props.firstDate} - {props.secondDate}</h5>
        </div>
    )
}
export default CardTrip;
