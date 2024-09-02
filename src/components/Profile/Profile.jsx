import './Profile.css'
export const Profile = () => {
    return(
        <div className="profile">
        <section id="profile">
            <div className="bio">
                <h3>Hi, There</h3>
                <p className='introduction'>I'm <strong className='name'>Pius Karanja Gathuita</strong><br></br></p>
                <p className='summary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio ipsam enim atque fugiat tenetur maxime fuga 
                    id odit unde doloribus eveniet cupiditate, cumque deleniti repellendus. Nulla, officiis minus. Consectetur, ipsam.</p>
                    <p className='summary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio ipsam enim atque fugiat tenetur maxime fuga 
                    id odit unde doloribus eveniet cupiditate, cumque deleniti repellendus. Nulla, officiis minus. Consectetur, ipsam.</p>
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