import React from "react";
import "./header.css";
import viewersdisney from "../images/viewersdisney.png";
import viewersmarvel from "../images/viewersmarvel.png";
import viewersnational from "../images/viewersnational.png";
import viewerspixar from "../images/viewerspixar.png";
import viewersstarwars from "../images/viewersstarwars.png";
const Viewer = () => {
  return (
    <div
      className=" text-white gap-5 max-w-5xl ml-auto mr-auto
       left-0 right-0 absolute top-[600px]  grid-cols-5 grid p-2"
    >
      <img
        className="icon border-2 rounded-md border-solid border-y-stone-600 w-full object-cover"
        src={viewersdisney}
      ></img>
      <img
        className="icon border-2 rounded-md border-solid border-y-stone-600 w-full object-cover"
        src={viewersmarvel}
      ></img>
      <img
        className="icon border-2 rounded-md border-solid border-y-stone-600 w-full object-cover"
        src={viewersdisney}
      ></img>
      <img
        className="icon border-2 rounded-md border-solid border-y-stone-600 w-full object-cover"
        src={viewersnational}
      ></img>
      <img
        className="icon border-2 rounded-md border-solid border-y-stone-600 w-full object-cover"
        src={viewersstarwars}
      ></img>
    </div>
  );
};

export default Viewer;
