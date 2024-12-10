import './App.css';
// import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Home from "../src/Pages/Home";
import pages from "../src/Components/Pages";
import Bars from './Components/Bars';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Menu from "../src/Pages/Menu";
import Orders from './Pages/Orders';
import About from './Pages/About';
import Login from './Pages/Login';
import Reservations from './Pages/Reservations';

function App() {
  return (
    <Router>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="/Menu" element={<Menu />}></Route>
      <Route path="/Orders" element={<Orders />}></Route>
      {/* <Route path="/Reservations" element={<Reservations />}></Route> */}
      <Route
            path={pages.get("reservations").path}
            element={<Reservations />}
          />
      <Route path="/Login" element={<Login />}></Route>
    </Routes>
    <Footer/>
    </Router>
  )
}

// function App() {
//   return (
//     <BrowserRouter>
//     <Nav/>
//     <Main/>
//     <Footer/>
//     </BrowserRouter>
//   );
// }

// const App = () => {
//   return (
//     <Router>   
//       <Nav/>
//         <Routes>
//            {/* <Route path={pages.get("home").path} element={<Home />} /> 
//            <Route path={pages.get("about").path} element={<About />} /> */}
//           <Route path={pages.get("menu").path} element={<Menu />} />
//           <Route
//             path={pages.get("reservations").path}
//             element={<Reservations />}
//           />
//           <Route path={pages.get("orderonline").path} element={<OrderOnline />} />
//           <Route path={pages.get("login").path} element={<Login />} />
//           <Route path="*" element={<Home />} /> 
//         </Routes>
//       <Footer/>
//       </Router>
//   );
// };

// const pages = {
//   home: { path: '/' },
//   about: { path: '/about' },
//   menu: { path: '/menu' },
//   reservations: { path: '/reservations' },
//   orderonline: { path: '/order-online' },
//   login: { path: '/login' },
// };

// const App = () => {
//   return (
//     <div data-testid="app-component"> 
//       <Bars>
//         <BrowserRouter>  
//         <Routes>
//           <Route path={pages.home.path} element={<Home />} />
//           <Route path={pages.about.path} element={<About />} />
//           <Route path={pages.menu.path} element={<Menu />} />
//           <Route
//             path={pages.reservations.path}
//             element={<Reservations />}
//           />
//           <Route path={pages.orderonline.path} element={<OrderOnline />} />
//           <Route path={pages.login.path} element={<Login />} />
//           <Route path="*" element={<Home />} />
//         </Routes>
//         </BrowserRouter>
//       </Bars>
//     </div> 
//   );
// };

export default App;