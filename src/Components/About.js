import react from "react";
import { useNavigate } from "react-router-dom";
import pages from "./Pages";
import RestaurantFood from "../icons_assets/restauranfood.jpg";
import Image from "../icons_assets/restauranfood.jpg";
import ImageRestaurant from "../icons_assets/restaurant.jpg";
import "../CSS/About.css"
import Button from "../Components/Button";

// function About() {
//     return (
//         <div class="about">
//         <div class=""> 
//           <h1 className="title">Little Lemon</h1>
//           <h2 className="subtitle">Chicago</h2>
//           <p className="description">We are a family owned Mediterranean restaurant, <br/> focused on traditional recipies served with a modern twist</p>
//         <button>Reserve a Table</button>
//         </div>

//         <img className="about-img" src={RestaurantFood} alt="A platter of food"/>
//         </div>
//     );
// }

function About() {
    const navigate = useNavigate();
  const onClickReserve = () => {
    navigate(pages.get("reservations").path);
  }

    return (
      <div className="about">
        <div>
          <h1 className="about-title">Little Lemon</h1>
          <h2 className="about-subtitle">Chicago</h2>
          <p className="about-description">
          We are a family owned Mediterranean restaurant, focused on traditional recipies served with a modern twist
          </p>
          <Button title={"Reserve a table"} onClick={onClickReserve} />
          {/* <Button title={"Reserve a Table"}/> */}
        </div>
  
        <img
          className="about-image-bruchetta"
          src={ImageRestaurant}
          alt="Restarurant food"
          height={200}
          width={200}
        />
        <img
          className="about-image-restaurant"
          src={Image}
          alt="Restarurant food"
          height={200}
          width={200}
        />
      </div>
    );
  };

export default About;