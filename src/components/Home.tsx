import React, { useEffect } from "react";
import Imageslider from "./Imageslider";
import { db } from "../firebase";
import axios from "axios";
import homebackground from "../images/homebackground.png";
import Viewer from "./Viewer";
import Movies from "./Movies";
import { collection, query, getDocs } from "firebase/firestore";
// const axios = require("axios");
const Home = () => {
  // let list = [];
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const q = query(collection(db, "movies"));
  //     const querySnapshot = await getDocs(q);
  //     const data = querySnapshot.docs.map((doc) => ({
  //       ...data.data(),
  //       id: doc.id,
  //     }));
  //     console.log(data);
  //   };
  //   fetchData();
  //   console.log(list);
  // }, []);

  // const options = {
  //   method: "GET",
  //   url: "https://imdb8.p.rapidapi.com/auto-complete",
  //   params: { q: "game of thr" },
  //   headers: {
  //     "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
  //     "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
  //   },
  // };

  // axios
  //   .request(options)
  //   .then(function (response) {
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });

  const lisst = async () => {
    return axios
      .get("https://imdb8.p.rapidapi.com/auto-complete", {
        headers: {
          "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
          "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
        },
        params: {
          q: "game of thr",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div
      style={{
        minHeight: "1000px",
        zIndex: "-1",
        objectFit: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${homebackground})`,
      }}
    >
      <Imageslider />
      <Viewer />
      <Movies />
    </div>
  );
};

export default Home;
