


import React, { useState } from "react";
import Css from "./Main.module.css"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import vendor from '../../Assets/Vector 20.svg'
import PgService from '../Courses';
import Feedback from '../../Component/feedback/Feedback';
import Detail from '../../Component/detail/Detail';
import ReactStars from "react-rating-stars-component";
import bg from '../../Assets/bg5.svg'
import duration from '../../Assets/duration.svg'


import Technology from "../technology/Technology";
import Footer from "../../Component/footer/Footer";
import { NavLink } from "react-router-dom";
import ScrollToTop from "../../Scroll";



function Main() {
  const [open, setOpen] = useState(false)
  function courseDetails(e) {
    setOpen(!open)
    console.log(e)
  }


  useEffect(() => {
    AOS.init({

    });
  }, [])

  let courses = [
    {
      coursename: 'Mobile App Development',
      price: 32000,
      time: 6,
      description: 'Mobile application development is the process of creating software applications that run on a mobile device',
      effect: 1000,
      image: '/Assets/f1.svg',
    },
    {
      coursename: 'Full-Stack Development',
      price: 30000,
      time: 6,
      image: '/Assets/fulstack.svg',
      effect: 1500,
      description: 'Full stack development is the process of developing both the frontend and backend of applications'
    },
    {
      coursename: 'Front End Development',
      price: 15000,
      time: 3,
      image: '/Assets/frontend.svg',
      effect: 1800,
      description: 'Front-end development is the process of building components that interact with users. Examples are the user interface, buttons, user-entered data, websites, and user experience (UX) features.'
    },
    {
      coursename: 'Back End Development',
      price: 20000,
      time: 3,
      image: '/Assets/backend.svg',
      effect: 2000,
      description: 'Back-end development means working on server-side software, which focuses on everything you cant see on a website'
    },
    {
      coursename: 'Ui&Ux',
      price: 12000,
      time: 1,
      image: '/Assets/ui&UX.svg',
      effect: 2200,
      description: 'Back-end development means working on server-side software, which focuses on everything you cant see on a website'
    },
  ]

  const phoneNumber = '+919284614144'; // Replace with the recipient's phone number
  const defaultMessage = 'Courses'; // Your default message

  // Create the WhatsApp link
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <>
   
      <div className={Css.slider}>
        <div className={Css.slider_container}>
          <div className={Css.slider_animation}>
            <p data-aos="fade-left" data-aos-duration="1000">
              {" "}
              <RiVerifiedBadgeFill color="#F17216" />{" "}
              <span>Best Platform for learning</span>{" "}
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
            <p data-aos="zoom-in" data-aos-duration="1000" className={Css.p}>"We assemble succeding future over modern and unified intelligence."</p>
            <NavLink to="https://wa.me/+919284614144">
            <button  data-aos-duration="1200">Enroll Now <span>▶</span></button>
            </NavLink>
          </div>
          <div className={Css.slider_img} data-aos="zoom-in">
            <img src={bg} alt="" width={'100%'} />
          </div>
        </div>
      </div>

      <div className={Css.section} id='course-sec'>
        <h2  data-aos="fade-down" data-aos-duration="1000">Our Courses Features</h2>
        <div className={Css.courses}>
          {
            courses.map((e) => (

              <div className={Css.course} data-aos="fade-up" data-aos-duration={e.effect}>
                <div className={Css.logos}>
                  <img src={e.image} alt="front-end" />
                </div>
                <div className={Css.details}>
                  <h4>{e.coursename}</h4>
                  <div className={Css.duration}>
                  <img src={duration} alt="" />
                  <h5>Duration {e.time} Months</h5>
                  </div>
                  <div className={Css.enroll}>
                  <NavLink to={`https://wa.me/+919284614144?text=${e.coursename}`}>
                    <button>Enroll Now</button>
                 </NavLink>
                    </div>
                </div>
              </div>


            ))
          }

        </div>
      </div>
      {
        open && <Detail />
      }
      <PgService />
      <Technology />
      <Feedback />
      <Footer />
    </>
  );
}

export default Main;
