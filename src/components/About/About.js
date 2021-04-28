import './About.css'

function About(){
    return(
        <div>
        <div className="about">
            <div className="card">
            <div className="aboutTitle">
                Easyweather
            </div>
                <div className="container">
                    <h4><b>A Simple Weather Application</b></h4> 
                    <p>Developed with WeatherStack API</p>
                    <a href="https://weatherstack.com/" target="_blank" rel="noreferrer">Here</a> 
                </div>
            </div>
        </div>
        <footer className="footer">
            <p>@dev007</p>
            <p>prashanith007@gmail.com</p>
        </footer>
        </div>
    );
}

export default About;