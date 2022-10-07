import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderbadging from "../images/sliderbadging.jpg";
import sliderscale from "../images/sliderscale.jpg";
import sliderscales from "../images/sliderscales.jpg";
import sliderbadag from "../images/sliderbadag.jpg";
import { Link } from "react-router-dom";
const Imageslider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => console.log(setdata(data.results)));
  }, []);
  console.log(data);
  return (
    <div
      style={{ width: "87vw" }}
      className="text-white text white  absolute ml-auto mr-auto
       left-0 right-0 mt-5 shadow-xl  "
    >
      <Slider className=" " {...settings}>
        {data.map((m) => (
          <div className="relative cursor-pointer">
            <Link to={`${m.id}/${m.title}`}>
              <img
                className="h-[450px] w-full  opacity-60"
                src={`https://image.tmdb.org/t/p/original${m.backdrop_path}`}
              ></img>
              <div className="absolute top-56 ml-6 ">
                <h1 className="text-3xl font-bold mb-2">{m.title}</h1>
                <div className="flex text-base font-normal gap-5 mb-2">
                  <p>{m.release_date}</p>
                  <h1>{m.vote_average}⭐</h1>
                </div>
                <p className="text-xs font-light max-w-xl">{m.overview}</p>
              </div>
            </Link>
          </div>
        ))}
        {/* <div>
          <img className="h-72 w-full" src={sliderbadging}></img>
        </div>
        <div>
          <img className="h-72 w-full" src={sliderscale}></img>
        </div>
        <div>
          <img className="h-72 w-full" src={sliderscales}></img>
        </div>
        <div>
          <img className="h-72 w-full" src={sliderbadag}></img>
        </div> */}
      </Slider>
    </div>
  );
};

export default Imageslider;
