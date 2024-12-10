import React, { useState} from "react";
import Logo from "../icons_assets/Logo.svg";
import "../CSS/Navi.css"
import { useNavigate } from "react-router-dom";
import Reservations from "../Pages/Reservations";

// function Nav() {
//     return (
//         <nav>
//             <ul>
//                 <li> <img src={Logo} alt="Little Lemon Logo"/></li>
//                 <li><a href="App.js">Home</a></li>
//                 <li><a href="About.js">About</a></li>
//                 <li><a href="Menu.js">Menu</a></li>
//                 <li><a href="Reservations.js">Reservations</a></li>
//                 {/* <li><a href="OrderOnline.js">Order Online</a></li>
//                 <li><a href="Login.js">Login</a></li> */}
//             </ul>
//         </nav>
//     )
// }

// function Nav() {
//     return (
//         <nav>
//             <Link to="../Pages/Reservations" className="">Reservations</Link>        
//         </nav>
//     )
// }

const Nav = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const onClickImage = () => {
      navigate("/");
    };
  
    const menuItems = [
      { id: 1, label: "Home", link: "/" },
      { id: 2, label: "About", link: "/about" },
      { id: 3, label: "Menu", link: "/menu" },
      { id: 4, label: "Reservations", link: "/Reservations" },
      { id: 5, label: "Order Online", link: "/orders" },
      { id: 6, label: "Login", link: "/login" }
    ];
  
    return (
      <header className="navbar">
        <div className="logo">
          <img src={Logo} alt="logo" height={50} onClick={onClickImage} />
        </div>
        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <ul className={`menu-list ${isMenuOpen ? "open" : ""}`}>
            {menuItems.map(item => (
              <li key={item.id}>
                <a href={item.link} className="link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="menu-toggle" onClick={toggleMenu}>
          {/* <img src={MenuIcon} alt="menu-icon" /> */}
        </div>
      </header>
    );
  };

export default Nav;