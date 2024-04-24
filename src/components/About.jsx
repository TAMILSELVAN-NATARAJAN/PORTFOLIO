import { Link } from 'react-scroll'

import '../components/About.css'



function About(){
    return(
        <div className="About" id='About'>
           <div className="about-header">
            <h1>About Me</h1>
           </div>
            <div className="about-contanier">
            <div className="about-design">
                  <div className="about-circles">

                    <div className="circle1 circle">
                        <div className="power-circle">
                            <h3>9+</h3>
                        </div>
                        <h2>Projects Done</h2>
                    </div>


                    <div className="circle2 circle">
                    <div className="power-circle">
                            <h3>3</h3>
                        </div>
                        <h2> Project progress</h2>
                    </div>


                    <div className="circle3 circle">

                    <div className="power-circle">
                            <h3>2</h3>
                        </div>
                        <h2>client</h2>
                    </div>


                    <div className="circle4 circle">
                    <div className="power-circle">
                            <h3>8</h3>
                        </div>
                        <h2>Working hours</h2>
                    </div>
                    
                  </div>
            </div>
            <div className="about-content">
              <h1>Unlock Your Creativeness</h1>
              <h2>As a Full Stack developer </h2>
              <p>Hello guys!, My name is <strong > Tamilselvan N</strong> . I'm a passionate full-stack developer that loves to make dynamic, user-friendly websites. I bring a combination of skills in technology and creative thinking to any project I work on, having three years of experience in the field.
I was curious to learn how to solve problems and loved creativity, which is how my path in software development began. My expertise with back-end frameworks like Django and Node.js, as well as front-end technologies like React.js, has improved over time. In order to offer scalable solutions that surpass customer expectations, I work well in fast-paced environments in teams.In my free time, I like to explore new ways to improve user experiences, get into open-source projects, and keep updated with developing technology.
</p>
                        <button>
                        <Link to="contactUs"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500} >Contact Me</Link>
                            </button>
                        <button className='hire-me'><Link to="contactUs"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500} >Hire Me</Link></button>
            </div>
            </div>

        </div>
    );
}

export default About;