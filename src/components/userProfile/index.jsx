import React, { useContext } from "react";
import './index.css'
import { FetchDataContext } from "../../store/fetchdata";

const UserProfile = () => {
    const data = useContext(FetchDataContext)
    return(
        <div className="userProfileContainer">
            <div className="profile">
                <div className="profilePicture">
                    <img src={data[0].url} alt="" />
                </div>
            </div>
            <div className="posts">Posts</div>
        </div>
    )
}

export default UserProfile