import react, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

import '../components/Navabar.css'
import Logo from '../assests/img/Logo.svg'
import Tamil_resume from '../assests/files/Tamilselvan_resume.pdf'

import { useRef } from "react";

import { TiThMenu } from "react-icons/ti";
import { FaXmark } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";





function Navbar() {


    const setdarktheme = ()=>{
        document.querySelector("body").setAttribute("data-theme",'dark');
    }

    const setlighttheme = ()=>{
        document.querySelector("body").setAttribute("data-theme",'light');
    }

  

  

    const [navbar, setNavbar] = useState(false);
    const [open, setopen] = useState(false);
    const [theme, settheme] = useState(false);


    const tog_theme=()=>{

        if(theme){
            setdarktheme()
            settheme(false)
           

        }else{
            setlighttheme()
            settheme(true)
            
        }
       }
     
    const opennav =()=>{
        if(open){
            setopen(false);
        }else{
            setopen(true)
        }
    }
    const changenavbarcolor = () => {
        if (window.scrollY >= 160) {
            setNavbar(true);

        } else {
            setNavbar(false);
        }
    };
    window.addEventListener("scroll", changenavbarcolor);

    return (
        <div className={navbar ? 'Navbar active' : 'Navbar'}>
            <nav>
                <div className="logo">
                    <img src={Logo} alt="logo" />
                    <h2>T<span>amizh</span></h2>
                </div>
                <div className={open?"navlist-m active":"navlist-m"}>
                    <ul>
                        <li><a > <Link to="Home"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500} >Home</Link> </a></li>
                        <li><a > <Link to="About"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500} >About</Link></a></li>
                        <li><a > <Link to="Education"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500} >Education</Link></a></li>
                        <li><a > <Link to="Skill"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500} >Skill</Link></a></li>
                        <li><a > <Link to="contactUs"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500} >Contact us</Link></a></li>
                    </ul>
                </div>
                <div className="navlist-l">
                    <ul>
                        <li><span><a href={Tamil_resume} target='_blank'>Download Cv </a></span></li>
                        <li><button className='hire-me'>
                            
                        <Link to="contactUs"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500} >Hire Me</Link>
                            
                            </button></li>
                    </ul>
                </div>
                <div className="theme" onClick={tog_theme}>
                    <p>{theme?<CiDark/>:<CiLight/>}</p>
                </div>
                <div className="toggle">
                    <p className='tog-btn' onClick={opennav}> {open?  <FaXmark /> :<TiThMenu />} </p>
                </div>
            </nav>
            <h2 className='up-arrow'>
                <Link to="Home"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}><MdOutlineKeyboardDoubleArrowUp/></Link>
            </h2>

        </div>
    );

}

export default Navbar;