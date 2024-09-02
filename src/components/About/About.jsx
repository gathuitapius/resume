import './About.css'
export const About = () => {
    return (
        <div className="about">
            <section id="about">
            <div className="img-for-about">
                <img src="./images/pius.jpg" alt="Myimg" />
            </div>
            <div className='line'>
                <hr />
            </div>
            <div className="about-info">
                <div className="info">
                <h2>Full-Stack Software Developer</h2>
                <p>Experience: 3 years</p>
                <p>Specialty: Web Design, Web Development</p>
                <p>Email: gathuitapius097@gmail.com</p>
                <p>Phone: +254797460838</p>
                </div>
                <h3>Stacks</h3>
                <div className="stack">
                    <div className="stack-item">MongoDB</div>
                    <div className="stack-item">React</div>
                    <div className="stack-item">Express</div>
                    <div className="stack-item">NodeJS</div>
                    <div className="stack-item">MySQL</div>
                    <div className="stack-item">Flask</div>
                    <div className="stack-item">Django</div>
                    <div className="stack-item">Redis</div>
                </div>
                <h3>Technologies</h3>
                <div className="technologies">
                    <div className="tech">RabbitMQ</div>
                    <div className="tech">Docker</div>
                    <div className="tech">Git</div>
                    <div className="tech">WebSockets</div>
                    <div className="tech">SQL & NoSQL Databases</div>
                    <div className="tech">REST api</div>
                    <div className="tech">GraphQL</div>
                </div>
            </div>
            </section>
        </div>
    )
}