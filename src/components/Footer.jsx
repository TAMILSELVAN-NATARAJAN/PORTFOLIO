import './Footer.css'

import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

function Footer(){
    return (
        <div className="Footer">
            <div className="map">
                <h3>Our Location</h3>
                <p><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d500.0103750774539!2d79.58648394784613!3d12.001106174151781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1711799547472!5m2!1sen!2sin" width="400" height="200" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
               </div>
            <div className="middle">
                <h2>Say hello</h2>
                <p>If you are interested in working with us or just want to say hello simply drop us a line!</p>
                <a href="https://mail.google.com/" target='_blank'>tamilselvan.admire@gmail.com</a>
            </div>
            <div className="socialmedias">
                <h2>Follow us </h2>
                    <ul>
                            <li><a href="https://www.facebook.com/profile.php?id=100041667720142&mibextid=ZbWKwL" target="_blank"><FaFacebook /></a></li>
                            <li><a href="https://www.instagram.com/_lucky_lad_65/" target="_blank"><RiInstagramFill /></a></li>
                            <li><a href="https://www.linkedin.com/in/tamilselvan-natarajan-3ba954219/" target="_blank"><FaLinkedin /></a></li>
                            <li><a href="https://github.com/TAMILSELVAN-NATARAJAN" target="_blank"><FaGithub /></a></li>
                            <li><a href="https://twitter.com/heart_broken_65?t=ehsWuEL1F38nKIIOG72gnA&s=09" target="_blank"><FaTwitter /></a></li>
                        </ul>

                    </div>

              <div className="copyright">
                <a href="https://www.linkedin.com/in/tamilselvan-natarajan-3ba954219/"><p>© 2024 – 2030 Lucky_lad_65 | All Rights Reserved</p></a>
                </div>      

        </div>
    );

}


export default Footer;