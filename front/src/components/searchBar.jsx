import {BiSearchAlt2} from "react-icons/bi"

import "../stylesheets/searchBar.scss"
const SearchBar = () => {
    return(
        <form className="search_bar">
            <label><BiSearchAlt2/></label>
            <input type="text" placeholder={"Search your trip "}/>
        </form>
    )
}
export default SearchBar;
