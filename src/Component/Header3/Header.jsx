import React, { useEffect } from 'react'
import Css from "./Header.module.css"
import { Link } from 'react-router-dom'
import logo from "../../Assets/Instagram post - 1 (8).svg"
import { useState, useRef } from 'react'
import { FaBars } from 'react-icons/fa'
import { HashLink } from 'react-router-hash-link'
import { NavLink } from 'react-router-dom'
import ScrollToTop from '../../Scroll'
// import bars from '../../Assets/Bars.png'


function Header() {
    const [count, setCount] = useState(0);
    const [nav, setNav] = useState(false);
    const ref1 = useRef()
    const ref2 = useRef()
    const [scrolllY, setScrollY] = useState(0)
    const [scr, setScr] = useState(false)

    useEffect(() => {

        const handleScroll = () => {
            setScrollY(window.scrollY)

            if (scrolllY < 50) {
                setScr(false)

            }
            else {
                setScr(true)

            }
        }

        window.addEventListener("scroll", handleScroll)

    })


    function open() {
        if (count === 0) {
            ref2.current.style.display = "block";
            setCount(1)

        }
        else {
            ref2.current.style.display = "none"
            setCount(0)
        }

    }
    function cross() {

        ref2.current.style.display = "none"
        setCount(0)
    }
   function navClick(){
setNav(!nav)
   }

    return (
        <>

            <div className={Css.topHeader} id='top'>


            </div>
            <div className={Css.header}>
                <div className={Css.logo}>
                    <img src={logo} alt='main-logo' />
                </div>
                <div className={Css.nav}>
                    <HashLink to={"/#top"}><span >Home</span></HashLink>
                    <HashLink to={"/#tech-sec"}><span>About </span></HashLink>
                    <HashLink to={"/#course-sec"}><span>Courses </span></HashLink>
                    <HashLink to={"/#sec-contact"}><span> Contact</span></HashLink>
                    <div className={Css.talkbtn}>
                    <NavLink to="https://wa.me/+919284614144"> 
                    <button>
                            Let's Talk
                        </button>
                        </NavLink>
                    </div>
                </div>

               
            </div>

            
        </>
    )
}

export default Header