import '../components/Skills.css'

import { SlGlobe } from "react-icons/sl";
import { VscTools } from "react-icons/vsc";
import { FaDatabase } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { MdDraw } from "react-icons/md";
import { IoMan } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";

function Skills(){
    return(
        <div className="Skills" id='Skill'>
           <div className="container">
           <div className="main-title">
                <h1>My Skills</h1>
            
            </div>

              <div className="row">
                <section className="col">
                    <div className="sub-title">
                        <h2>Programming Skills</h2>
                    </div>
                         
                         <div className="skils-container">
                            <div className="skill">
                                 <div className="subject">HTML</div>
                                 <div className="progress-bar" value="92%">
                                    <div className="progress-line" style={{"max-width":"92%"}} ></div>
                                 </div>
                            </div>
                              
                            <div className="skill">
                                 <div className="subject">Css</div>
                                 <div className="progress-bar" value="79%">
                                    <div className="progress-line" style={{"max-width":"79%"}} ></div>
                                 </div>
                            </div>


                            <div className="skill">
                                 <div className="subject">Js</div>
                                 <div className="progress-bar" value="81%">
                                    <div className="progress-line" style={{"max-width":"81%"}} ></div>
                                 </div>
                            </div>



                            <div className="skill">
                                 <div className="subject">React Js</div>
                                 <div className="progress-bar" value="70%">
                                    <div className="progress-line" style={{"max-width":"70%"}} ></div>
                                 </div>
                            </div>
                            <div className="skill">
                                 <div className="subject">Django </div>
                                 <div className="progress-bar" value="76%">
                                    <div className="progress-line" style={{"max-width":"76%"}} ></div>
                                 </div>
                            </div>



                  

                         </div>

                </section>

{/* left side */}
                <section className="col col2">
                    <div className="sub-title">
                        <h2>Professional Skills</h2>
                    </div>
                         
                         <div className="skils-container">
                            <div className="skill">
                                 <div className="subject">Communication</div>
                                 <div className="progress-bar" value="90%">
                                    <div className="progress-line" style={{"max-width":"90%"}} ></div>
                                 </div>
                            </div>
                              
                            <div className="skill">
                                 <div className="subject">leadership</div>
                                 <div className="progress-bar" value="80%">
                                    <div className="progress-line" style={{"max-width":"80%"}} ></div>
                                 </div>
                            </div>


                            <div className="skill">
                                 <div className="subject">Creative Thinking</div>
                                 <div className="progress-bar" value="85%">
                                    <div className="progress-line" style={{"max-width":"85%"}} ></div>
                                 </div>
                            </div>



                            



                  

                         </div>

                </section>
              </div>

           </div>
            

        </div>
    );
}


export default Skills;