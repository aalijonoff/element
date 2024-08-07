import React, { useContext } from "react";
import "./index.css";
import Profile from "../../images/profile.jpg";
import { FetchDataContext } from "../../store/fetchdata";
const RightSideBar = () => {
  const data = useContext(FetchDataContext);
  return (
    <div className="footerContainer">
      <div className="profileSwitch">
        <div className="profileImg no-copy">
          <img src={Profile} alt="" />
        </div>
        <div className="profielNameBox">
          <div className="userName">aalijonoff</div>
          <div className="name">Azamat Alijonov</div>
        </div>
        <div className="switchButton no-copy">Switch</div>
      </div>
      <div className="suggestionsBox">
        <div className="suggestionsTop">
          Suggested for you <span>See All</span>
        </div>
        <div className="suggestedContainer">
          {data.slice(0, 5).map((element, index) => {
            return (
              <div key={index} className="suggestedBox">
                <div className="suggestedProfile no-copy">
                  <img src={element.url} alt="" />
                </div>
                <div className="suggestedUser">
                  {element.title !== undefined
                    ? element.title.slice(0, 8)
                    : element.title}{" "}
                  <span>Suggested for you</span>
                </div>
                <div className="switchButton no-copy">Follow</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="webPageInfo">
        About Help Press API Jobs Privacy Terms Locations Language Meta Verified
      </div>
      <div className="webPageStatus">© 2024 Instagram from Meta</div>
    </div>
  );
};

export default RightSideBar;
