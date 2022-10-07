import React, { useState } from "react";
import "./header.css";
import img2 from "../images/img2.png";
import dp from "../images/dp.jpg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeUser } from "./store/userSlice";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
// import { remove } from "./store/userSlice";
const Header = () => {
  const user = useSelector((state) => state.name);
  const [show, setshow] = useState(false);
  const dispatch = useDispatch();
  const loginbutton = () => {
    dispatch(removeUser());
    setshow(!show);
  };
  console.log(user);
  return (
    <div className="sticky top-0 z-50 flex w-full bg-slate-500 h-12 items-center">
      <Link to="/">
        <img className="mr-3 w-24 h-10 cursor-pointer" src={img2}></img>
      </Link>
      <div className="relative flex gap-3">
        <Link to={"/"}>
          <div className="header flex cursor-pointer">
            <HomeIcon />
            <h3>home</h3>
          </div>
        </Link>
        <Link to="/wishlist">
          <div className="flex header cursor-pointer">
            <AddIcon />
            <h3>Watchlist</h3>
          </div>
        </Link>
        <div className="flex header cursor-pointer">
          <MovieFilterIcon />
          <h3>Movies</h3>
        </div>
        <div className="flex header cursor-pointer">
          <SmartDisplayIcon />
          <h3>Series</h3>
        </div>
      </div>
      <div className="absolute right-0 mr-1 cursor-pointer">
        {user.length !== 0 && user[0].photo !== undefined ? (
          <img
            onClick={() => setshow(!show)}
            className="rounded-full w-10 h-10 "
            src={URL.createObjectURL(user[0].photo)}
          ></img>
        ) : (
          <AccountCircleIcon onClick={() => setshow(!show)} fontSize="large" />
        )}
      </div>{" "}
      {show && (
        <div
          onClick={() => setshow(!show)}
          className=" absolute text-blue-600 mr-0 bg-gray-100 pr-[2px] pl-2 right-0 top-[47px]"
        >
          {user.length === 0 ? (
            <Link to="/login">
              <h1>Login/Signup</h1>
            </Link>
          ) : (
            <div>
              <h1>{`Welcome ${user[0].username}`}</h1>
              <hr></hr>
              <h1 className="cursor-pointer" onClick={loginbutton}>
                Log out
              </h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
