import React from "react";
import "../technology/technology.css";
import Timg1 from "../../Assets/Desktop_-_1__9__1-removebg-preview 1.svg";
import Timg2 from "../../Assets/Vector.svg";
import Timg3 from "../../Assets/shop.svg";
import Timg4 from "../../Assets/cards.svg";
import Timg5 from "../../Assets/favorite-chart.png";

function Technology() {
  
  return (
    <>
    <h2 id="tech-sec">About</h2>
      <div className="technology_wrapper" >
     
        <div className="technology_leftside">
          <div className="technology_img" >
            <img src={Timg1} alt="" />
          </div>
          <div className="technology_heading">
          <p>Services</p>
            <h1>Our Capabilities</h1>
          </div>
          <div className="technology_lorem">
            <p style={{ color: "#747582" }}>
              We will bring the breathe of our <br /> experience and industry
              knowledge <br />
              to help you succeed
            </p>
          </div>
          <div className="technology_arrow">
            <img src={Timg2} alt="" />
          </div>
        </div>

        <div className="technology_cardswrapper">
          <div className="technology_card">
            <div className="card_img" style={{ marginLeft: "15px" }}>
              <img src={Timg3} alt="" />
            </div>
            <h3>Mobile App</h3>
            <p>
            Bring your imagination to the reality in the form of Mobile application We have a great experience in delivering high  quality mobile apps
            </p>
          </div>
          <div className="technology_card">
            <div className="card_img" style={{ marginLeft: "15px" }}>
              <img src={Timg4} alt="" />
            </div>
            <h3>Website </h3>
            <p>
            In the web devlopment we provide an intuitive design to the User based on the  user - interaction.
            </p>
          </div>
          <div className="technology_card">
            <div className="card_img" style={{ marginLeft: "15px" }}>
              <img src={Timg5} alt="" />
            </div>
            <h3>Digital Marketing </h3>
            <p>
            SEO plays an important role  in growing your business digitally & that comes that comes under the Digital Marketing
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Technology;
