import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../Context";
import { useContext } from "react";
import "./Nav.css";
import { Button, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const { number, loggedUser, isLogged, inputs, setInputs, search } =
    useContext(CartContext);

  let navigate = useNavigate();

  const [state, setState] = useState(false);

  const itemsList = [
    {
      text: "Home",

      onClick: () => navigate("/"),
    },
    {
      text: "About",

      onClick: () => navigate("/about"),
    },
    {
      text: "Shop",

      onClick: () => navigate("/shop"),
    },
    {
      text: "Contact",

      onClick: () => navigate("/contact"),
    },
    isLogged
      ? { text: loggedUser }
      : {
          text: "LogIn / Register",

          onClick: () => navigate("/login"),
        },
  ];
  return (
    <div className="nav">
      {/* HAMBURGER BUTTON  */}
      <div className="divDrawer">
        <Button onClick={() => setState(true)}>
          <div className="hamburger"></div>
          <div className="hamburger"></div>
          <div className="hamburger"></div>
        </Button>
        <Drawer
          anchor={"left"}
          open={state}
          onClose={() => setState(false)}
          className="drawer"
        >
          <List style={{ width: "190px" }} className="listDrawer">
            {itemsList.map((item, index) => {
              const { text, icon, onClick } = item;
              return (
                <>
                  <ListItem button key={text} onClick={onClick}>
                    {icon}
                    <ListItemText primary={text} />
                  </ListItem>
                  <hr />
                </>
              );
            })}
          </List>
        </Drawer>
      </div>
      {/* LOGO  */}
      <div className="logo">
        <Link to="/">
          <span>
            <i className="fa-solid fa-cookie-bite"></i>
          </span>
          D&D
        </Link>
      </div>
      {/* <div className="searchBar">
        <input type="text" id="search" placeholder="Search.." />
        <span>
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
      </div> */}
      <div className="searchBar">
        <form onSubmit={search}>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search Here.."
            value={inputs}
            onChange={(event) => setInputs(event.target.value)}
            // onKeyPress={search}
          />
          <span>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
        </form>
      </div>
      {/* CART  */}
      <div className="cart">
        <Link to="/Cart">
          <i className="fa-solid fa-cart-shopping">
            <span id="num">{number}</span>
          </i>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
