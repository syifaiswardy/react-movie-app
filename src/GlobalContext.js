import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext({
    searchParam: '',
    handleOnChange: () => { },
    handleOnSubmit: () => { },
    movieList: [],
    loading: false, //flag
})

const GlobalState = ({ children }) => {

    const [searchParam, setSearchParam] = useState('')
    const [movieList, setMovieList] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(()=>{
        const getDataStorage = JSON.parse(localStorage.getItem('movieList'))
        if (getDataStorage && getDataStorage.length > 0) setMovieList(getDataStorage)
    },[]) // to store search keyword in local storage after submit

    const handleOnChange = (event) => {
        console.log(event.target.value);
        setSearchParam(event.target.value)
    }

    const handleOnSubmit = async () => {
        setLoading(true)

        const response = await fetch(`https://www.omdbapi.com/?s=${searchParam}&apikey=dc6a5742`)//fetch the api endpoint
        const data = await response.json();

        if (data){
            setMovieList(data.Search)
            localStorage.setItem('movieList', JSON.stringify(data.Search))
            setLoading(false)
            setSearchParam('')
        } 

    }


    const contextValue = {
        searchParam,
        handleOnChange,
        handleOnSubmit,
        movieList,
        loading, //flag
    }

    return (
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>

    )
}

export default GlobalState;