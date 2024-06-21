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
            ratings: 3,
            effect: 1000,
            image: '/Assets/DigiB.png',
        },
        {
            coursename: 'Full-Stack Development',
            price: 30000,
            time: 6,
            ratings: 4,
            image: '/Assets/soft.png',
            effect: 1500,
            description: 'Full stack development is the process of developing both the frontend and backend of applications'
        },
        {
            coursename: 'Front End Development',
            price: 15000,
            time: 3,
            ratings: 4.5,
            image: '/Assets/logo1.png',
            effect: 2000,
            description: 'Front-end development is the process of building components that interact with users. Examples are the user interface, buttons, user-entered data, websites, and user experience (UX) features.'
        },
        {
            coursename: 'Back End Development',
            price: 20000,
            time: 3,
            ratings: 3.5,
            image: '/Assets/soft.png',
            effect: 2500,
            description: 'Back-end development means working on server-side software, which focuses on everything you cant see on a website'
        },
    ]
    useEffect(() => {
        AOS.init({

        });
    }, [])
    return (
        <>

            <div className={Css.mobile}>
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
                                            <h5>
                                                <span className={Css.rating}><ReactStars count={e.ratings} color="#ffd700"/> {e.ratings} Rating</span>
                                            </h5>
                                            <h5>{e.coursename}</h5>
                                            <h5>Duration {e.time} Months</h5>
                                            <div className={Css.enroll}>
                                                <button onClick={() => { courseDetails(`${e.coursename}`) }}>Enroll Now</button>
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
