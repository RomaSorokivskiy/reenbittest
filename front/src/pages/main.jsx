import SearchBar from "../components/searchBar";
import CardTrip from "../components/cardTrip";
import ButtonTrip from "../components/buttonTrip";
import SideBar from "../components/sideBar";
import ModalForm from "../components/modalForm";

import {useState} from "react";

import "../stylesheets/mainPage.scss"

const MainPage = () => {
    const [modalOpen, setModalOpen] = useState(false)
    return (
        <div className="main">
            <div style={{width:"75%"}} className="main__wrapper">
                <h2>Weather <span>Forecast</span></h2>
                <SearchBar/>
                <div className="main__card_trip__wrapper">
                    <div className="cards">
                        <CardTrip/>
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
