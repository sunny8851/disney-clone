import React, { useEffect, useState } from "react";
import "./header.css";
import viewersdisney from "../images/viewersdisney.png";
import viewersmarvel from "../images/viewersmarvel.png";
import viewersnational from "../images/viewersnational.png";
import viewerspixar from "../images/viewerspixar.png";
import viewersstarwars from "../images/viewersstarwars.png";
import { Link } from "react-router-dom";

const Movies = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => console.log(setdata(data.results)));
  }, []);
  const [populerdata, setpopulerdata] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => console.log(setpopulerdata(data.results)));
  }, []);
  return (
    <div className="absolute top-[800px] px-5 mb-5">
      <h1 className="text-white ">Recommended for You</h1>
      <div
        className="scr text-white gap-5 max-w-[1350px] overflow-x-scroll overflow-hidden over  ml-auto mr-auto
       left-0 right-0  flex   p-2 mb-5"
      >
        {data &&
          data.map((m) => (
            <Link to={`${m.id}/${m.title}`}>
              <img
                className="icon border-2 my-3 max-w-[280px] rounded-md border-solid max-h-[230px]  border-y-stone-600  object-cover"
                src={`https://image.tmdb.org/t/p/original${m.poster_path}`}
              ></img>
            </Link>
          ))}
      </div>
      <h1 className="text-white ">Popular</h1>
      <div
        className="scr text-white gap-5 max-w-[1350px] flex flex-wrap  ml-auto mr-auto
       left-0 right-0    p-2"
      >
        {populerdata.map((m) => (
          <Link to={`${m.id}/${m.title}`}>
            <img
              className="icon border-2 w-[170px] rounded-md border-solid max-h-[250px]  border-y-stone-600  object-cover"
              src={`https://image.tmdb.org/t/p/original${m.poster_path}`}
            ></img>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Movies;
