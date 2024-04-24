import "../components/Contact_form.css"

import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { useState } from "react";

function Contact_form(){

  const [user,setuser] =useState(
    {
        name:'',Email:'',Subject:'',Message:''
    }
  )

  let name,value;
  const data =(e) =>{
       name = e.target.name;
       value=e.target.value;
       setuser({...user,[name]: value})
      
  }

  const getdata= async (e)=>{
    const {name,Email,Subject,Message}=user;
   e.preventDefault();
   const options={
    method:'POST',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify({
        name,Email,Subject,Message
    })

   }
   const response =await fetch("https://portfolio-tamil-ba76b-default-rtdb.firebaseio.com/USerData.json",
   options)

   if(response)
   {
    alert("Message sent...Successfully")
    window.location.reload(false);

   }else{
    alert("error....Try agin")
   }
  }



    return(
        <div className="Contact_form" id="contactUs">
              <div className="about-header">
            <h1>Contact us</h1>
           </div>
            <div className="container">
                <div className="row">
                <section className="col left">
                    <div className="contact-title">
                        <h2>Get in Touch</h2>
                        <p>Conversation is the foundation of any excellent person. Let's get going on ours.</p>

                    </div>
                    <div className="contact-info">
                        <div className="iconsgroup">
                            <div className="icon">
                                   <FaPhoneAlt/>
                            </div>
                            <div className="details">
                            <span>Phone </span>
                            <span>+91 9444123712</span>
                            </div>
                        </div>

                        <div className="iconsgroup">
                            <div className="icon">
                            <MdEmail/>
                            </div>
                              <div className="details">
                            <span>Email </span>
                            <span>tamilselvan.admire@gmail.com</span>
                        </div>
                        </div>

                        <div className="iconsgroup">
                            <div className="icon">
                            <FaLocationDot/>
                            </div>  <div className="details">
                            <span>location </span>
                            <span>Radhapuram,Villupuram,TamilNadu-605501</span>
                        </div>
                        </div>
                    </div>

                    <div className="socialmedias">
                    <ul>
                            <li><a href="https://www.facebook.com/profile.php?id=100041667720142&mibextid=ZbWKwL" target="_blank"><FaFacebook /></a></li>
                            <li><a href="https://www.instagram.com/_lucky_lad_65/" target="_blank"><RiInstagramFill /></a></li>
                            <li><a href="https://www.linkedin.com/in/tamilselvan-natarajan-3ba954219/" target="_blank"><FaLinkedin /></a></li>
                            <li><a href="https://github.com/TAMILSELVAN-NATARAJAN" target="_blank"><FaGithub /></a></li>
                            <li><a href="https://twitter.com/heart_broken_65?t=ehsWuEL1F38nKIIOG72gnA&s=09" target="_blank"><FaTwitter /></a></li>
                        </ul>

                    </div>

                </section>

                <section className="col right">
                    <form  className="messageform" method="post">

                        <div className="inputgroup halfwidth">
                            <input type="text" name="name"  value={user.name} onChange={data} required />
                            <label >Your Name </label>
                        </div>
                        <div className="inputgroup halfwidth">
                            <input type="email" name="Email" value={user.Email} onChange={data} required />
                            <label >Your Email </label>
                        </div>

                        <div className="inputgroup fullwidth">
                            <input type="text" name="Subject" value={user.Subject} onChange={data} required />
                            <label >Subject </label>
                        </div>

                        <div className="inputgroup fullwidth ">
                            <textarea name="Message"  value={user.Message} onChange={data} required></textarea>
                            <label >Message </label>
                        </div>

                        <div className="inputgroup fullwidth">
                            <button onClick={getdata}>Send message</button>
                        </div>



                    </form>

                </section>


                </div>
            </div>

        </div>
        );
}

export default Contact_form;