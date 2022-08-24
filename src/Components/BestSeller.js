import React from "react";
import { Link } from "react-router-dom";
import "./BestSeller.css";

const BestSeller = () => {
  return (
    <div className="bestSeller">
      <h1>BestSeller</h1>
      <div className="bestSellerProducts">
        <div className="singlebest">
          <Link to="/shop">
            <div>
              <img src="bestSeller1.webp" alt="" />
            </div>
            <p>Gulab Jamun</p>
          </Link>
        </div>
        <div className="singlebest">
          <Link to="/shop">
            <div>
              <img src="bestSeller2.webp" alt="" />
            </div>
            <p>Rasgulla</p>
          </Link>
        </div>
        <div className="singlebest">
          <Link to="/shop">
            <div>
              <img src="bestSeller3.webp" alt="" />
            </div>
            <p>Mithai</p>
          </Link>
        </div>
        <div className="singlebest">
          <Link to="/shop">
            <div>
              <img src="bestSeller4.webp" alt="" />
            </div>
            <p>Ladoo</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
