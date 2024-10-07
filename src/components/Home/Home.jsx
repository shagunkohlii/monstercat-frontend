import React from "react";
import "./Home.css";
import "boxicons/css/boxicons.min.css";

const Home = () => {
  return ( 
    <div className="Hero-page">
      <div className="home-container">
        <div className="left-section">
          <p className="vertical-font">Instinct — Released May 22, 2020</p>
          <div className="image-container">
            <img
              src="https://images.pexels.com/photos/4167169/pexels-photo-4167169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="cover-img"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div className="right-section">
          <div>
            <h1>LEVEL DAYS</h1>
            <h2>CONRO</h2>
            <div className="right-sec-btn">
              <button>
                <i class="bx bx-play" style={{ fontSize: "30px" }}></i> Listen
                Now
              </button>
              <button>
                <i className="bx bx-share-alt" style={{ fontSize: "25px" }}></i>
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
