import React from "react";
import FetchData from "../fetchdata";

const Store = ({children}) => {
    return(
        <FetchData>
            {children}
        </FetchData>
    )
}

export default Store