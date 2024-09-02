import './Navbar.css';
export const Navbar = () => {
    return(
        <div className="nav">
            <div className="logo">
                <h2>Software <span>Dev.</span></h2>
            </div>
            <div className="links">
            <ul>
                <li className="link"><a href='#profile'>Home</a></li>
                <li className="link"><a href='#about'>About</a></li>
                <li className="link"><a href='#services'>Services</a></li>
                <li className="link"><a href='#portifolio'>Portifolio</a></li>
                <li className="link">Contact</li>
            </ul>
            </div>
            <div className="contact btn"><button>Contact Me</button></div>
        </div>
    )
}