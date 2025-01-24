import '../styles/Header.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div id='Header'>
            <div id="logo">
                {/* Wrap the logo with a Link */}
                <Link to='/'>
                    <img src='/src/assets/busBookingCompany.png' alt="The Bus Booking Company"></img>
                </Link>

            </div>
            <div id="advertisement-banner">
            <p>Advertisement: Welcome to the Online Bus Booking Application! Check out our latest offer.
                    Buy one ticket and get one free by September 30. This is an animation text.
                </p>
            </div>
            <div id="menu-navigation">
                <Link to="/Home"></Link>
                <Link to="/Dashboard">Dashboard|</Link>
                <Link to="/Booking">Booking|</Link>
                <Link to="/Login">Login|</Link>
                <Link to="/SignUp">SignUp|</Link>
                <Link to="/About">About|</Link>
                <Link to="/ContactUs">ContactUs|</Link>
            </div>
        </div>
    )
}

export default Header;
