import SearchBar from "../components/searchBar";
import CardTrip from "../components/cardTrip";
import ButtonTrip from "../components/buttonTrip";
import SideBar from "../components/sideBar";
import ModalForm from "../components/modalForm";

import {useState} from "react";

import "../stylesheets/mainPage.scss"

const MainPage = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [cardTrip, setCardTrip] = useState([
        {
            city: "Berlin",
            firstDate: "14.07.2023",
            secondDate: "21.07.2023"
        },
        {
            city: "Tokyo",
            firstDate: "17.07.2023",
            secondDate: "23.07.2023"
        },
        {
            city: "Barcelona",
            firstDate: "16.07.2023",
            secondDate: "26.07.2023"
        },
    ])
    return (
        <div className="main">
            <div style={{width:"75%"}} className="main__wrapper">
                <h2>Weather <span>Forecast</span></h2>
                <SearchBar/>
                <div className="main__card_trip__wrapper">
                    <div className="cards">
                        {cardTrip.map((el,id) => <CardTrip props={el} key={id++}/>)}
                    </div>
                    <ButtonTrip setOpenModel={setModalOpen}/>
                </div>
            </div>
            <SideBar/>
            {modalOpen && <ModalForm setOpenModal={setModalOpen} />}
        </div>
    )
}

export default MainPage;
