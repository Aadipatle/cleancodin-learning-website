import React, { useEffect } from 'react'
import Css from "./Header.module.css"
import { Link } from 'react-router-dom'
import logo from "../../Assets/Instagram post - 1 (8).svg"
import { useState, useRef } from 'react'
import { FaBars } from 'react-icons/fa'
import { HashLink } from 'react-router-hash-link'
// import bars from '../../Assets/Bars.png'


function Header() {
    const [count, setCount] = useState(0);
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

    return (
        <>

            <div className={Css.topHeader} id='top'>


            </div>
            <div className={Css.header}>
                <div className={Css.logo}>
                    <img src={logo} alt='main-logo' />
                </div>
                <div className={Css.nav}>
                    <HashLink to={"/#top"}><span>Home</span></HashLink>
                    <Link to={"/page"}><span>About </span></Link>
                    <HashLink to={"/#course-sec"}><span>Courses </span></HashLink>
                    <Link to={"/contactus"}><span> Contact</span></Link>
                    <div className={Css.talkbtn}>
                        <button>
                            Let's Talk
                        </button>
                    </div>
                </div>

                <div onClick={open} className={Css.hiddenNavBar}><span className={Css.bars}><FaBars />
                </span></div>

                <div className={Css.hiddenNav} ref={ref2}>
                    <div className={Css.hiddenNavCase} ref={ref1}>
                        <div className={Css.hiddenNav_cross} onClick={cross} ></div>
                        <HashLink to={"/#top"} onClick={cross}><span>Home</span></HashLink>
                        <Link to={"/page"} onClick={cross}><span> About</span></Link>
                        <HashLink to={"/course-sec"} onClick={cross}><span>Services </span></HashLink>
                        <Link to={"/contactus"} onClick={cross}><span> Contact</span></Link>
                        <button className={Css.hidenbtn}>Let's Talk</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header