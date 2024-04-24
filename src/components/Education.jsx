import '../components/Education.css'

function Education() {
    return (
        <div className="Education"id='Education'>
            <div className="about-header">
                <h1>Education</h1>
            </div>
            <div className="row">
                <section className='col'>
                    <header className='title'>
                        <h2>Education</h2>
                    </header>
                    <div className="contents">

                        <div className="box">
                            <h4>2020-2024</h4>
                            <h3>BE and Communication Engineering</h3>
                            <p><strong>Kongunadu College of engineering and Technology,</strong> <br />Thottiyam, Trichy, India</p>
                        </div>
                        <div className="box">
                            <h4>2019-2020</h4>
                            <h3>HSC</h3>
                            <p><strong>Siga Higher Secondary school,</strong> <br />Kappiyampuliyur, Villupuram, India </p>
                        </div>
                        <div className="box">
                            <h4>2017-2018</h4>
                            <h3>SSLC</h3>
                            <p><strong>Siga Higher Secondary school,</strong> <br />Kappiyampuliyur, Villupuram, India </p>

                        </div>

                    </div>
                </section>



                <section className='col'>
                    <header className='title'>
                        <h2>Experience</h2>
                    </header>
                    <div className="contents">
                        <div className="box">
                            <h4>2024</h4>
                            <h3>Python Full Stack Developer</h3>
                            <h3>Coapps.ai</h3>
                            <p>During my internship, I'm improving my website building and programming abilities, learning a lot about Python full stack development, and participating in innovative projects that will influence technology in the future.
</p>
                        </div>

                    </div>
                </section>
            </div>

        </div>
    );
}

export default Education;