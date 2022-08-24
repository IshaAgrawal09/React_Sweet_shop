import React, { useState, useEffect } from "react";
import "./Shop.css";
import CartContext from "../Context";
import { useContext } from "react";
import Nav from "./Nav";

const Shop = () => {
  const { list, selectList, setSelectList, addCart, setAddCart, setNumber } =
    useContext(CartContext);

  const [option, setOption] = useState();
  const [price, setPrice] = useState();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const addToCart = (event) => {
    let count = 0;
    setAddCart(
      addCart.map((item) => {
        if (event.currentTarget.className == item.id) {
          count = count + 1;
        }
      })
    );
    if (count === 0) {
      setAddCart([...addCart, { ...selectList[event.currentTarget.id] }]);
    }
  };
  console.log(addCart);
  setNumber(addCart.length);
  // FILTER
  const select = (event) => {
    if (event.currentTarget.value === "Bengali") {
      setSelectList(
        list.filter((item) => {
          return item.name.includes(event.currentTarget.value);
        })
      );
      setOption(event.currentTarget.value);
    } else if (event.currentTarget.value === "Rajasthani") {
      setSelectList(
        list.filter((item) => {
          return item.name.includes(event.currentTarget.value);
        })
      );
      setOption(event.currentTarget.value);
    } else if (event.currentTarget.value === "SugarFree") {
      setSelectList(
        list.filter((item) => {
          return item.name.includes(event.currentTarget.value);
        })
      );
      setOption(event.currentTarget.value);
    } else if (event.currentTarget.value === "Burfi") {
      setSelectList(
        list.filter((item) => {
          return item.name.includes(event.currentTarget.value);
        })
      );
      setOption(event.currentTarget.value);
    } else if (event.currentTarget.value === "all") {
      setSelectList([...list]);
      setPrice();
      setOption(event.currentTarget.value);
    }
  };

  // PRICE FILTER
  const selectPrice = (event) => {
    console.log(event.currentTarget.value);
    if (event.currentTarget.value == "low") {
      selectList.sort((a, b) => {
        return a.price - b.price;
      });
      setSelectList([...selectList]);
      setPrice(event.currentTarget.value);
    } else if (event.currentTarget.value == "high") {
      selectList.sort((a, b) => {
        return b.price - a.price;
      });
      setPrice(event.currentTarget.value);
      setSelectList([...selectList]);
    }
    console.log("Select List");
  };

  return (
    <>
      <Nav />
      <div className="divShop">
        <div id="overlay"></div>
        <h1>Shop</h1>
      </div>
      <div className="mainShop">
        {/* FITERING  */}
        <div className="filterMain">
          <h2>Categories</h2>
          <ul>
            <li>
              <button
                onClick={select}
                value="Bengali"
                className={"Bengali" === option && "active"}
              >
                Traditional Bengali Sweets
              </button>
            </li>
            <li>
              <button
                onClick={select}
                value="Rajasthani"
                className={"Rajasthani" === option && "active"}
              >
                Traditional Rajasthani Sweets
              </button>
            </li>
            <li>
              <button
                onClick={select}
                value="SugarFree"
                className={"SugarFree" === option && "active"}
              >
                Sugar Free Sweets
              </button>
            </li>
            <li>
              <button
                onClick={select}
                value="Burfi"
                className={"Burfi" === option && "active"}
              >
                D&D special Burfi
              </button>
            </li>
            <li>
              <button
                onClick={select}
                value="all"
                className={"all" === option && "active"}
              >
                View All
              </button>
            </li>
          </ul>
          <hr style={{ width: "90%" }} />
          <h2>Filter By Price</h2>
          <ul>
            <li>
              <button
                onClick={selectPrice}
                value="low"
                className={"low" === price && "active"}
              >
                Low to High
              </button>
            </li>
            <li>
              <button
                onClick={selectPrice}
                value="high"
                className={"high" === price && "active"}
              >
                High to Low
              </button>
            </li>
          </ul>
        </div>
        {/* PRODUCTS  */}
        <div className="shop">
          {selectList.map((item, index) => {
            return (
              <div className="singleProduct" key={index}>
                <div className="container">
                  <div className="image-card">
                    <img src={item.image} alt="" />
                    {item.offer !== 0 ? <span>{item.offer}% OFF</span> : null}
                  </div>
                </div>

                <h4>{item.name}</h4>
                <p>&#8377;{item.price}.00</p>
                <button onClick={addToCart} className={item.id} id={index}>
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Shop;
