import React, { useState } from 'react'
import Css from "./Main.module.css"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaRegStar, FaRupeeSign, FaStar } from "react-icons/fa";
import vendor from '../../Assets/Vector 20.svg'
import PgService from '../Courses';
import Feedback from '../../Component/feedback/Feedback';
import Detail from '../../Component/detail/Detail';
import ReactStars from "react-rating-stars-component";


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
    ratings:3,
    effect:1000,
    image:'/Assets/DigiB.png',
  },
    {
    coursename: 'Full-Stack Development',
    price: 30000,
    time: 6,
    ratings:4,
    image:'/Assets/soft.png',
    effect:1500,
    description: 'Full stack development is the process of developing both the frontend and backend of applications'
  },
    {
    coursename: 'Front End Development',
    price: 15000,
    time: 3,
    ratings:4.5,
    image:'/Assets/logo1.png',
    effect:2000,
    description: 'Front-end development is the process of building components that interact with users. Examples are the user interface, buttons, user-entered data, websites, and user experience (UX) features.'
  },
    {
    coursename: 'Back End Development',
    price: 20000,
    time: 3,
    ratings:3.5,
    image:'/Assets/soft.png',
    effect:2500,
    description: 'Back-end development means working on server-side software, which focuses on everything you cant see on a website'
  },
]
  return (
    <>
      <div className={Css.slider}>
        <div className={Css.slider_container}>
          <div className={Css.slider_animation}>
            <p data-aos="fade-left" data-aos-duration="1000"> <RiVerifiedBadgeFill color='#F17216' /> <span>Best Platform  for  leaning</span> </p>
            <h1 data-aos="fade-right" className={Css.h1} data-aos-duration="1000">Reach Your  learning <br />
              Goals in</h1>
            <img className={Css.vendor} src={vendor} alt="" />
            <p data-aos="zoom-in" data-aos-duration="1000" className={Css.p}>"Support small business and join the nationwide movement to encourage commercial support for the millions of minority owned businesses helping world economy."</p>

            <button data-aos="fade-up" data-aos-duration="1200">Enroll Now <span>▶</span></button>
          </div>
          <div className={Css.slider_img} data-aos="zoom-in" >
          </div>
        </div>
      </div>

      <div className={Css.section} >
        <h2 id='course-sec' data-aos="fade-down" data-aos-duration="1000">Our Courses Features</h2>
        <div className={Css.courses}>

        {
          courses.map((e)=>(
            
              <div className={Css.course} data-aos="fade-up" data-aos-duration={e.effect}>
              <div className={Css.logos}>
                <img src={e.image} alt="front-end" />
              </div>
              <div className={Css.details}>
                <h5>
                  <span className={Css.rating}><ReactStars count={e.ratings}  color="#ffd700" halfIcon={true}/> {e.ratings} Rating</span>
                </h5>
                <h5>{e.coursename}</h5>
                <h5>Duration {e.time} Months</h5>
                <div className={Css.enroll}>
                  <button onClick={() => { courseDetails(`${e.coursename}`) }}>Enroll Now</button>
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
      <Feedback />


    </>

  )
}

export default Main;