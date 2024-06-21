import React from "react";
import Css from "./Main.module.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaRegStar, FaRupeeSign, FaStar } from "react-icons/fa";
import vendor from "../../Assets/Vector 20.svg";
import web from "../../Assets/DigiB.png";
import PgService from "../Courses";
import Technology from "../technology/Technology";
import Footer from "../../Component/footer/Footer";
function Main() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <>
      <div className={Css.slider}>
        <div className={Css.slider_container}>
          <div className={Css.slider_animation}>
            <p data-aos="fade-left" data-aos-duration="1000">
              {" "}
              <RiVerifiedBadgeFill color="#F17216" />{" "}
              <span>Best Platform for leaning</span>{" "}
            </p>
            <h1
              data-aos="fade-right"
              className={Css.h1}
              data-aos-duration="1000"
            >
              Reach Your learning <br />
              Goals in
            </h1>
            <img className={Css.vendor} src={vendor} alt="" />
            <p
              data-aos="zoom-in"
              data-aos-duration="1000"
              style={{ fontSize: "20px" }}
            >
              "Support small business and join the nationwide movement to
              encourage commercial support for the millions of minority owned
              businesses helping world economy."
            </p>

            <button data-aos="fade-up" data-aos-duration="1200">
              Get Started <span>▶</span>
            </button>
          </div>
          <div className={Css.slider_img} data-aos="zoom-in"></div>
        </div>
      </div>

      <div className={Css.section}>
        <h2>Our Courses Features</h2>
        <div className={Css.courses}>
          <div className={Css.course}>
            <div className={Css.logos}>
              <img src={web} alt="front-end" />
            </div>
            <div className={Css.details}>
              <h5>
                <span className={Css.star}>
                  <FaStar />
                </span>
                <span className={Css.star}>
                  <FaStar />
                </span>
                <span className={Css.star}>
                  <FaStar />
                </span>
                <span className={Css.star}>
                  <FaStar />
                </span>
                <span className={Css.star}>
                  <FaRegStar />
                </span>
                <span className={Css.star1}>4.0 Rating</span>
              </h5>
              <h5>Mobile App Development</h5>
              <h5>
                Price{" "}
                <span>
                  <FaRupeeSign size={"11px"} />
                </span>
                32000
              </h5>
              <h5>Duration 4 Months</h5>
              <div className={Css.enroll}>
                <button>Enroll Now</button>
              </div>
            </div>
          </div>

          <div className={Css.course}>
            <div className={Css.logos}>
              <img src={web} alt="front-end" />
            </div>
            <div className={Css.details}>
              <h5>
                <span className={Css.star}>
                  <FaStar />
                </span>
                <span className={Css.star}>
                  <FaStar />
                </span>
                <span className={Css.star}>
                  <FaStar />
                </span>
                <span className={Css.star}>
                  <FaStar />
                </span>
                <span className={Css.star}>
                  <FaRegStar />
                </span>
                <span className={Css.star1}>4.0 Rating</span>
              </h5>
              <h5>Mobile App Development</h5>
              <h5>
                Price{" "}
                <span>
                  <FaRupeeSign size={"11px"} />
                </span>
                32000
              </h5>
              <h5>Duration 4 Months</h5>
              <div className={Css.enroll}>
                <button>Enroll Now</button>
              </div>
            </div>
          </div>

          <div className={Css.course}>
            <div className={Css.logos}>
              <img src={web} alt="front-end" />
            </div>
            <div className={Css.details}>
              <h5>
                <span className={Css.star}>
                  <FaStar />
                </span>
                <span className={Css.star}>
                  <FaStar />
                </span>
                <span className={Css.star}>
                  <FaStar />
                </span>
                <span className={Css.star}>
                  <FaStar />
                </span>
                <span className={Css.star}>
                  <FaRegStar />
                </span>
                <span className={Css.star1}>4.0 Rating</span>
              </h5>
              <h5>Mobile App Development</h5>
              <h5>
                Price{" "}
                <span>
                  <FaRupeeSign size={"11px"} />
                </span>
                32000
              </h5>
              <h5>Duration 4 Months</h5>
              <div className={Css.enroll}>
                <button>Enroll Now</button>
              </div>
            </div>
          </div>

          <div className={Css.course}>
            <div className={Css.logos}>
              <img src={web} alt="front-end" />
            </div>
            <div className={Css.details}>
              <h5>
                <span className={Css.star}>
                  <FaStar />
                </span>
                <span className={Css.star}>
                  <FaStar />
                </span>
                <span className={Css.star}>
                  <FaStar />
                </span>
                <span className={Css.star}>
                  <FaStar />
                </span>
                <span className={Css.star}>
                  <FaRegStar />
                </span>
                <span className={Css.star1}>4.0 Rating</span>
              </h5>
              <h5>Mobile App Development</h5>
              <h5>
                Price{" "}
                <span>
                  <FaRupeeSign size={"11px"} />
                </span>
                32000
              </h5>
              <h5>Duration 4 Months</h5>
              <div className={Css.enroll}>
                <button>Enroll Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PgService />
      <Technology />
      <Footer />
    </>
  );
}

export default Main;
