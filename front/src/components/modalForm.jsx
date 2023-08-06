import "../stylesheets/modalForm.scss"
import {useState} from "react";


const SelectorCheck = () => {
    return (
        <p>Please select a date that, upon next 15 days, or check if city selected</p>
    )
}
const ModalForm = ({ setOpenModal }) => {
    const [place, setPlace] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const addDays = (date,days) => {
        return new Date(date).setDate(new Date(date).getDate() + days)
    }

    return(
        <div className="modal_form">
            <div className="header">
                <h3>Create trip</h3>
                <button onClick={() => {
                    setOpenModal(false)
                }} className="x">X</button>
            </div>
            <div className="hr"></div>

            <form>
                <label><span>* </span> City</label>
                <input list="city" name="city" placeholder="Please select a city" value={place} onChange={(e) => setPlace(e.target.value)}/>
                <datalist id="city">
                    <option value="Berlin"/>
                    <option value="Barcelona"/>
                    <option value="Tokyo"/>
                </datalist>
                <label><span>* </span> Start date</label>
                <input type="date" placeholder="Select date" value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
                <label><span>* </span> End date</label>
                <input type="date" placeholder="Select date" value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
            </form>
            <div className="hr" style={{marginTop:"70px"}}></div>

            <div className="button__wrapper">
                <button onClick={() => {
                    setOpenModal(false)
                }}>Cancel</button>
                {!(addDays(startDate, 15) < new Date(endDate)) && place?<></>:<SelectorCheck/>}
                {!(addDays(startDate, 15) < new Date(endDate)) && place? <button className="save">Save</button>: <button className="save unsave">Save</button>}
            </div>
        </div>
    )
}
export default ModalForm;
