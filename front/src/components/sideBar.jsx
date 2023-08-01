
import "../stylesheets/sideBar.scss"

const color = "#110E3B"
const SideBar = () => {
    return(
        <div className="side_bar" style={{background:`${color}`}}>
            <h2>Sunday</h2>
            <h1>24<span>°C</span></h1>
            <h4>Berlin</h4>
            <div className="side_bar__countdown">
                <p>30 <span>days</span></p>
                <p>15 <span>hours</span></p>
                <p>15 <span>minutes</span></p>
                <p>30 <span>seconds</span></p>
            </div>
        </div>
    )
}
export default SideBar;
