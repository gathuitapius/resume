import './Profile.css'
export const Profile = () => {
    return(
        <div className="profile">
        <section id="profile">
            <div className="bio">
                <h3>Hi, There</h3>
                <p className='introduction'>I'm <strong className='name'>Pius Karanja Gathuita</strong><br></br></p>
                <p>
                <h2>Full Stack Developer | ERP Technical Support Specialist</h2>

                With over 3 years of experience as a Full Stack Developer, I specialize in building robust,
                 scalable web applications using the MERN stack. My expertise extends to supporting users on ERP systems,
                 where I ensure seamless operations and troubleshoot technical issues. Whether it's developing innovative 
                 solutions from scratch or optimizing existing systems, I bring a blend of technical proficiency and problem-solving
                  skills to every project. I'm passionate about crafting efficient, user-friendly applications and delivering top-notch 
                  ERP support that enhances business processes.
                </p>
                <div className="social">
                    <ul>
                        <li className="icons">FB</li>
                        <li className="icons">git</li>
                        <li className="icons">Discord</li>
                        <li className="icons">LinkedIn</li>
                        <li className="icons">Twitter</li>
                    </ul>
                </div>
                <div className="btn">
                    <button>Hire Me</button>
                    <button>Download CV</button>
                </div>
            </div>
            <div className="my-img">
                <img src="./images/pius.jpg" alt="my profile" />
            </div>
        </section>
        </div>
    )
}