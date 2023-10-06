import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";


const Search = () => {

    const { searchParam, handleOnChange, handleOnSubmit } = useContext(GlobalContext);


    return (
        <div className="search">
            <input name="search"
                value={searchParam}
                onChange={handleOnChange}
                placeholder="Enter movie keyword" />
            <button disabled={searchParam.trim().length <=2} //to make the button disabled if have letter less than or equal 2
                onClick={handleOnSubmit}>
                Submit
            </button>
        </div>
    )
}

export default Search;