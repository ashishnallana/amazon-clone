import React, { useEffect, useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../Firebase";
import { signOut } from "firebase/auth";
import { IconButton } from "@mui/material";
import { useSearchParams } from "react-router-dom";

function Header() {
  const [{ basket, user, searchKey }, dispatch] = useStateValue();
  const [searchParams] = useSearchParams();

  const [SearchQuery, setSearchQuery] = useState(searchKey);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "UPDATE_SEARCHKEY",
      searchTerm: SearchQuery,
    });
    const queryParams = new URLSearchParams();
    queryParams.set("q", SearchQuery);
    navigate(`/search?${queryParams.toString()}`);
  };

  const handleAuthenticaton = () => {
    if (user) {
      signOut(auth);
    }
  };

  useEffect(() => {
    setSearchQuery(searchParams.get("q"));
  }, []);

  return (
    <div className="header">
      {/* logo */}
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon_logo"
          className="header_logo"
        />
      </Link>
      {/* searchbar */}
      <div className="header_search">
        <form className="header_search" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            className="header_searchInput"
            value={SearchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <IconButton type="submit">
            <SearchIcon className="header_searchIcon" />
          </IconButton>
        </form>
      </div>
      {/* header user nav || options */}
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div className="header_option" onClick={handleAuthenticaton}>
            <span className="header_optionLineOne">
              Hello, {!user ? "Guest" : user.email}
            </span>
            <span className="header_optionLinetwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        {/* <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLinetwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLinetwo">Prime</span>
        </div> */}
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length || 0}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
