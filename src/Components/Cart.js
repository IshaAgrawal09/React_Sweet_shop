import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CartContext from "../Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./Cart.css";
import Nav from "./Nav";

const Cart = () => {
  let navigate = useNavigate();
  const {
    number,
    setNumber,
    addCart,
    setAddCart,
    amount,
    setAmount,
    isLogged,
  } = useContext(CartContext);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  // CHECKOUT PAGE
  const checkout = () => {
    if (isLogged) {
      navigate("/checkout");
    } else {
      navigate("/login");
    }
  };

  // TOTAL AMOUNT FUNCTION
  setAmount(
    addCart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0)
  );

  // INCREASE QUANTITY FUNCTION
  const increase = (event) => {
    setAddCart(
      addCart.map((item, index) => {
        if (index == event.currentTarget.id) {
          item.quantity = item.quantity + 1;
          return item;
        }
        return item;
      })
    );
  };

  // DECREASE QUANTITY FUNCTION
  const decrease = (event) => {
    console.log(addCart[event.currentTarget.id]["quantity"]);

    if (addCart[event.currentTarget.id]["quantity"] == 1) {
      setAddCart(
        addCart.filter((item, index) => {
          return index != event.currentTarget.id;
        })
      );
      setNumber(number - 1);
    } else {
      setAddCart(
        addCart.map((item, index) => {
          if (index == event.currentTarget.id) {
            item.quantity = item.quantity - 1;
            return item;
          }
          return item;
        })
      );
    }
  };

  console.log("Add Cart Array");
  console.log(addCart);
  return (
    <>
      <Nav />
      {addCart.length == 0 ? (
        <div id="emptyCart">
          <div className="emptyImage">
            <img src="emptyCart.webp" alt="" />
          </div>
          <h3>Your Cart is Empty!</h3>
          <p>Looks Like You haven't made Your Choice Yet</p>
          <Link to="/shop">Start Shopping</Link>
        </div>
      ) : (
        <>
          <div className="cartPage">
            {addCart.map((item, index) => {
              return (
                <>
                  <div className="singleCart">
                    <div id="cartImage">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="data">
                      <h5>{item.name}</h5>
                      <p>&#x20B9;{item.price * item.quantity}.00</p>

                      <div className="increase">
                        <button
                          className="quantity"
                          id={index}
                          onClick={decrease}
                        >
                          <i className="fa-solid fa-minus"></i>
                        </button>
                        {item.quantity}
                        <button
                          className="quantity"
                          id={index}
                          onClick={increase}
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}

            <hr id="line" />
            <div className="amount">
              <div id="totalAmount">Total Amount:</div>
              <div>&#8377;{amount}.00</div>
            </div>
          </div>
          <button className="emptyButton" onClick={checkout}>
            CHECKOUT
          </button>
        </>
      )}
    </>
  );
};

export default Cart;
