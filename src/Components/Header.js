import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="carousel">
        <ul className="slides">
          <input type="radio" name="radio-buttons" id="img-1" checked />
          <li className="slide-container">
            <div className="slide-image">
              <img src="carousel3.jpeg" alt="" />
            </div>

            <div className="carousel-controls">
              <label htmlFor="img-3" className="prev-slide">
                <span>&lsaquo;</span>
              </label>
              <label htmlFor="img-2" className="next-slide">
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>
          <input type="radio" name="radio-buttons" id="img-2" />
          <li className="slide-container">
            <div className="slide-image">
              <img src="carousel1.webp" alt="" />
            </div>
            <div className="carousel-controls">
              <label htmlFor="img-1" className="prev-slide">
                <span>&lsaquo;</span>
              </label>
              <label htmlFor="img-3" className="next-slide">
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
