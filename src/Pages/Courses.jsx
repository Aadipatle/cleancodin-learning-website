import React from "react";
// import image from "../../Assets/Group 46.jpg";
// import Dj from "../../Assets/dj inhouse.jpg";
// import Decor from "../../Assets/decoration.jpg";
// import Cater from "../../Assets/cateringin.jpeg";
// import dress from "../../Assets/dressing room.jpeg";
// import parking from "../../Assets/car parking.jpg";
// import valet from "../../Assets/Component 12.jpg";
// import guest from "../../Assets/guest.jpg";
// import stage from "../../Assets/stage.jpeg";
// import "../Pages/main/Main.module.css";
import Css from '../Pages/main/Main.module.css'
import  './Courses.css'
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaRegStar, FaRupeeSign, FaStar } from "react-icons/fa";
import web from '../Assets/DigiB.png'

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

function PgService() {
    return (
        <>

            <div className="mobile-v">
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
                    // autoplay={{
                    //     delay: 2000,
                    //     disableOnInteraction: false,
                    // }}

                    modules={[EffectCoverflow, Autoplay]}
                    className='swip_wrap'
                >
                    <SwiperSlide className={Css.swipe_slide} >
                        <div className={Css.course}>
                            <div className={Css.logos}>
                                <img src={web} alt="front-end" />
                            </div>
                            <div className={Css.details}>
                                <h5>
                                    <span className={Css.star}><FaStar /></span>
                                    <span className={Css.star}><FaStar /></span>
                                    <span className={Css.star}><FaStar /></span>
                                    <span className={Css.star}><FaStar /></span>
                                    <span className={Css.star}><FaRegStar /></span>
                                    <span className={Css.star1}>4.0 Rating</span>
                                </h5>
                                <h5>Mobile App Development</h5>
                                <h5>Price <span><FaRupeeSign size={'11px'} /></span>32000</h5>
                                <h5>Duration 4 Months</h5>
                                <div className={Css.enroll}>
                                    <button>Enroll Now</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide className={Css.swipe_slide} >
                        <div className={Css.course}>
                            <div className={Css.logos}>
                                <img src={web} alt="front-end" />
                            </div>
                            <div className={Css.details}>
                                <h5>
                                    <span className={Css.star}><FaStar /></span>
                                    <span className={Css.star}><FaStar /></span>
                                    <span className={Css.star}><FaStar /></span>
                                    <span className={Css.star}><FaStar /></span>
                                    <span className={Css.star}><FaRegStar /></span>
                                    <span className={Css.star1}>4.0 Rating</span>
                                </h5>
                                <h5>Mobile App Development</h5>
                                <h5>Price <span><FaRupeeSign size={'11px'} /></span>32000</h5>
                                <h5>Duration 4 Months</h5>
                                <div className={Css.enroll}>
                                    <button>Enroll Now</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={Css.swipe_slide}  >
                        <div className={Css.course}>
                            <div className={Css.logos}>
                                <img src={web} alt="front-end" />
                            </div>
                            <div className={Css.details}>
                                <h5>
                                    <span className={Css.star}><FaStar /></span>
                                    <span className={Css.star}><FaStar /></span>
                                    <span className={Css.star}><FaStar /></span>
                                    <span className={Css.star}><FaStar /></span>
                                    <span className={Css.star}><FaRegStar /></span>
                                    <span className={Css.star1}>4.0 Rating</span>
                                </h5>
                                <h5>Mobile App Development</h5>
                                <h5>Price <span><FaRupeeSign size={'11px'} /></span>32000</h5>
                                <h5>Duration 4 Months</h5>
                                <div className={Css.enroll}>
                                    <button>Enroll Now</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={Css.swipe_slide}  >
                        <div className={Css.course}>
                            <div className={Css.logos}>
                                <img src={web} alt="front-end" />
                            </div>
                            <div className={Css.details}>
                                <h5>
                                    <span className={Css.star}><FaStar /></span>
                                    <span className={Css.star}><FaStar /></span>
                                    <span className={Css.star}><FaStar /></span>
                                    <span className={Css.star}><FaStar /></span>
                                    <span className={Css.star}><FaRegStar /></span>
                                    <span className={Css.star1}>4.0 Rating</span>
                                </h5>
                                <h5>Mobile App Development</h5>
                                <h5>Price <span><FaRupeeSign size={'11px'} /></span>32000</h5>
                                <h5>Duration 4 Months</h5>
                                <div className={Css.enroll}>
                                    <button>Enroll Now</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={Css.swipe_slide} >
                        <div className={Css.course}>
                            <div className={Css.logos}>
                                <img src={web} alt="front-end" />
                            </div>
                            <div className={Css.details}>
                                <h5>
                                    <span className={Css.star}><FaStar /></span>
                                    <span className={Css.star}><FaStar /></span>
                                    <span className={Css.star}><FaStar /></span>
                                    <span className={Css.star}><FaStar /></span>
                                    <span className={Css.star}><FaRegStar /></span>
                                    <span className={Css.star1}>4.0 Rating</span>
                                </h5>
                                <h5>Mobile App Development</h5>
                                <h5>Price <span><FaRupeeSign size={'11px'} /></span>32000</h5>
                                <h5>Duration 4 Months</h5>
                                <div className={Css.enroll}>
                                    <button>Enroll Now</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>







        </>
    );
}

export default PgService;
