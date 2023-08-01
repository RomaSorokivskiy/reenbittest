import {FiPlus} from "react-icons/fi"

const ButtonTrip = ({setOpenModel}) => {
    return(
        <button onClick={() => {
            setOpenModel(true)
        }}>
            <FiPlus className="plus"/>
            Add trip
        </button>
    )
}
export default ButtonTrip;
