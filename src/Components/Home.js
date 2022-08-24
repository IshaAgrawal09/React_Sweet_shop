import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import "./Home.css";
import BestSeller from "./BestSeller";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Nav />
      <Header />

      {/* OFFERS  */}
      <div className="offerDiv animate__animated animate__slideInUp">
        <div className="image">
          <img src="image1.jpg" alt="" />
        </div>
        <div className="offerContent animate__animated animate__pulse animate__delay-3s animate__infinite">
          <h1>
            Flat <span>20%</span> Off on{" "}
          </h1>
          <h1>
            Your <span>First Order</span>
          </h1>

          <Link to="/shop">
            <button id="buynow">
              Buy Now <i className="fa-solid fa-arrow-right"></i>
            </button>
          </Link>
        </div>
      </div>
      <div className="mainSection animate__animated animate__slideInUp ">
        <div>
          <img src="border.png" alt="" />
        </div>
        <div className="head1">
          <h1 id="fade">INDIA'S FIRST ORGANISED</h1>
          <h1 id="cursive">Sweet brand & American Eatery</h1>
        </div>
      </div>
      <BestSeller />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
