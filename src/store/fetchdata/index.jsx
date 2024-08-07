import React, {useState, useEffect, useContext, createContext} from "react";

export const FetchDataContext = createContext()

const FetchData = ({children}) => {

    const [data, setData] = useState([0])

    const fetchFunc = async () => {
        let fetchDataLet = await fetch('https://jsonplaceholder.typicode.com/photos')
        fetchDataLet = await fetchDataLet.json()
        setData(fetchDataLet)
    }

    useEffect(() => {
        fetchFunc()
    }, [])

    return(
        <FetchDataContext.Provider value={data}>
            {children}
        </FetchDataContext.Provider>
    )
}

export default FetchData