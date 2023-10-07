import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";


const Search = () => {

    const { searchParam, handleOnChange, handleOnSubmit } = useContext(GlobalContext);


    return (
        <div className=""
        // style={{background : 'black'}}
        >
            <div className="container">
                <div className="navbar justify-content-between">
                    <div className="col-md-2 search ">
                        <h1>MovieWiki</h1>
                    </div>
                    <div className="col-md-5 search ">
                        <input name="search"
                            value={searchParam}
                            onChange={handleOnChange}
                            placeholder="Enter movie keyword"
                            className="form-control mx-2" />

                        <button disabled={searchParam.trim().length <= 2} //to make the button disabled if have letter less than or equal 2
                            onClick={handleOnSubmit}
                            className="btn btn-warning mx-2"
                            type="button">
                            Search
                        </button>
                    </div>
            </div>
        </div>
        </div >

    )
}

export default Search;