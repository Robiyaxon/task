import React from "react";
import logo from "../../assest/Logo.png"
import "./TopHeader.css"
function Topheader() {
    const [click, setClick] = React.useState(false);
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
    return (
        <div>
            <div className={click ? "main-container" : ""} onClick={() => Close()} />
            <nav className="navbar" onClick={e => e.stopPropagation()}>
                <div className="nav-container">
                    <a href="" className="nav-logo"><img src={logo} alt="" /></a>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <a href="" className="nav-links"> Features</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-links"> About us</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-links">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-links">Feedback</a>
                        </li>
                        <div className="button_for_responce">
                        <button className="topHeader_button">Request a demo</button>

                        </div>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </ div>
    );
}


export default Topheader