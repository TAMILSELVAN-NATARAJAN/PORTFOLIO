import { Link } from 'react-scroll'

import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import '../components/Home.css'
import hero from '../assests/img/hero.svg'




function Home(){
     

    return(
        <div className="Home" id="Home">
               <div className="content-part">
                          
                    <div className="title">
                        <h1>Hello, My name is <span>Tamilselvan</span></h1>
                        <h2>I'm a <span>Web developer</span></h2>
                    </div>
                    <div className="description">
                        <p>To constantly develop my skills and
grows as professionally, to come up with
interesting Ideas for unforgettable
customer satisfaction.
</p>
                    </div>
                 <div className="hire-me-home">
                        
                        <button> <Link to="contactUs"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500} >Contact Me</Link></button>
                        <button id="hire-me">
                        <Link to="contactUs"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500} >Hire Me</Link></button>
                    </div> 
                   
                    <div className="social-media">
                        <ul>
                            <li><a href="https://www.facebook.com/profile.php?id=100041667720142&mibextid=ZbWKwL"target="_blank"><FaFacebook /></a></li>
                            <li><a href="https://www.instagram.com/_lucky_lad_65/"  target="blank" ><RiInstagramFill /></a></li>
                            <li><a href="https://www.linkedin.com/in/tamilselvan-natarajan-3ba954219/" target="_blank"><FaLinkedin /></a></li>
                            <li><a href="https://github.com/TAMILSELVAN-NATARAJAN"target="_blank"><FaGithub /></a></li>
                            <li><a href="https://twitter.com/heart_broken_65?t=ehsWuEL1F38nKIIOG72gnA&s=09"target="_blank"><FaTwitter /></a></li>
                        </ul>
                    </div>

               </div>
               <div className="image-part">
               
           
                <img   className="hero_img"  src={hero} alt="" />
            
               </div> 



        </div>

    );
}

export default Home