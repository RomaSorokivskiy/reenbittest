import "../stylesheets/modalForm.scss"

const ModalForm = ({ setOpenModal }) => {
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
                <input list="city" name="city" placeholder="Please select a city"/>
                <datalist id="city">
                    <option value="Berlin"/>
                    <option value="Barcelona"/>
                    <option value="Tokyo"/>
                </datalist>
                <label><span>* </span> Start data</label>
                <input type="date" placeholder="Select date"/>
                <label><span>* </span> End data</label>
                <input type="date" placeholder="Select date"/>
            </form>
            <div className="hr" style={{marginTop:"70px"}}></div>

            <div className="button__wrapper">
                <button onClick={() => {
                    setOpenModal(false)
                }}>Cancel</button>
                <button className="save">Save</button>
            </div>
        </div>
    )
}
export default ModalForm;
