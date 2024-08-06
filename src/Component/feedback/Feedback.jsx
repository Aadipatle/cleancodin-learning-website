import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Css from './Feedback.module.css'
import { FaQuoteLeft } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Feedback() {
    useEffect(() => {
        AOS.init({

        });
    }, [])
    return (
        <>
            <div className={Css.feedback}>
                <div className={Css.heading}>
                    <span data-aos="fade-left" data-aos-duration="1000">TESTIMONIAL</span>
                    <h2 data-aos="fade-right" data-aos-duration="1000">What Our</h2>
                    <h2 data-aos="fade-left" data-aos-duration="1000">Customer’s Say</h2>
                </div>

                <div className={Css.mobile}>
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                            rotate: 10,
                            stretch: 0,
                            depth: 0,
                            modifier: 0,
                            slideShadows: true,
                        }}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}

                        modules={[EffectCoverflow, Autoplay]}
                        className='swip_wrap'
                    > 
                        <SwiperSlide className={Css.feedback_slide} >
                            <div className={Css.customer} data-aos="zoom-in" data-aos-duration="1200">
                                <p><span className={Css.tic}><FaQuoteLeft /></span>I really like the team for example, a relationship-focused performance expectation might be that the employee sustain collegial working relationships with her peers, subordinates and customers.</p>
                                <h5>Aditya Patle</h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={Css.feedback_slide} >
                            <div className={Css.customer} data-aos="zoom-in" data-aos-duration="1200">
                                <p><span className={Css.tic}><FaQuoteLeft /></span>I really like the team for example, a relationship-focused performance expectation might be that the employee sustain collegial working relationships with her peers, subordinates and customers.</p>
                                <h5>Faizan </h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={Css.feedback_slide} >
                            <div className={Css.customer} data-aos="zoom-in" data-aos-duration="1200">
                                <p><span className={Css.tic}><FaQuoteLeft /></span>I really like the team for example, a relationship-focused performance expectation might be that the employee sustain collegial working relationships with her peers, subordinates and customers.</p>
                                <h5>Tushar</h5>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default Feedback;
