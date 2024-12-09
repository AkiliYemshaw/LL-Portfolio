import react from "react";
import Logo from "../icons_assets/Logo.svg";
import "../CSS/Navi.css"

function Nav() {
    return (
        <nav>
            <ul>
                <li> <img src={Logo}/></li>
                <li><a href="App.js">Home</a></li>
                <li><a href="About.js">About</a></li>
                <li><a href="Menu.js">Menu</a></li>
                <li><a href="Reservations.js">Reservations</a></li>
                <li><a href="OrderOnline.js">Order Online</a></li>
                <li><a href="Login.js">Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav;