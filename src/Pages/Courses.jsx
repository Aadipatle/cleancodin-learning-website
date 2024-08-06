import React, { useEffect, useState } from "react";
import Css from '../Pages/main/Main.module.css'
// import  './Courses.css'
import { FaRegStar, FaRupeeSign, FaStar } from "react-icons/fa";
import web from '../Assets/DigiB.png'

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination"; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReactStars from "react-rating-stars-component";
import Detail from "../Component/detail/Detail";
import { NavLink } from "react-router-dom";
import duration from '../Assets/duration.svg'

function PgService() {
    const [open, setOpen] = useState(false)
    function courseDetails(e) {
        setOpen(!open)
        console.log(e)
    }
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
    
    useEffect(() => {
        AOS.init({

        });
    }, [])
    return (
        <>

            <div className={Css.mobile} >
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}

                    modules={[EffectCoverflow, Autoplay]}
                    className={Css.swip_wrap}
                >
                    {
                        courses.map((e) => (
                            <SwiperSlide className={Css.swiper_slide} key={e.coursename} >
                                <div className={Css.c}>
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
                                </div>
                            </SwiperSlide>

                        ))
                    }   
                    {
                        open ? <h1>Hello</h1> : ''
                    }      
                </Swiper>
            </div>







        </>
    );
}

export default PgService;
