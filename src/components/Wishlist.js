import React from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Wishlist = () => {
  const items = useSelector((state) => state.cart);

  return (
    <div>
      <h1 className=" text-white text-lg w-full bg-orange-500 h-12 text-center pt-2">
        Your Favroits movies/Shows
      </h1>
      <div
        className="scr text-white gap-5 max-w-[1350px] flex flex-wrap  ml-auto mr-auto
       left-0 right-0 pl-0   p-2"
      >
        {items.map((m) => (
          <Link to={`/${m.id}/${m.title}`}>
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

export default Wishlist;
