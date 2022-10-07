import React, { useEffect, useState } from "react";
import "./header.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ctalogoone from "../images/ctalogoone.svg";
import ctalogotwo from "../images/ctalogotwo.png";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import playiconwhite from "../images/playiconwhite.png";
import playiconblack from "../images/playiconblack.png";
import GroupsIcon from "@mui/icons-material/Groups";
import CancelIcon from "@mui/icons-material/Cancel";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import play from "../videos/play.mp4";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { add } from "./store/CreateSlice";
const Detail = () => {
  const [data, setdata] = useState();
  const { id } = useParams();
  const [isloading, setisloading] = useState(true);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(setdata(data));
        setisloading(false);
      });
  }, []);
  console.log(data);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const Add = () => {
    dispatch(add(data));
  };
  return (
    <>
      {isloading ? (
        <div className="  ">
          {Array(1)
            .fill(0)
            .map((_, index) => (
              <div key={index} className=" animate-pulse">
                <div className="min-h-[83vh] max-w-[1400px] mt-10 min-w-[1400px] ml-auto mr-auto flex-shrink-0   bg-gray-400"></div>
              </div>
            ))}
        </div>
      ) : (
        <div className="">
          <img
            style={{ zIndex: "-1" }}
            className="min-h-[93vh] max-w-[1400px] min-w-[1400px] ml-auto mr-auto opacity-70 fixed top-12  bottom-0 right-0 left-0 "
            src={`https://image.tmdb.org/t/p/original${
              data && data.poster_path
            }`}
          ></img>
          <img
            className="w-64 mt-8 ml-8 absolute"
            src={`https://image.tmdb.org/t/p/original/8lvHyhjr8oUKOOy2dKXoALWKdp0.png`}
          ></img>
          <div className="top-64 absolute flex gap-4 ml-12 items-center">
            <button
              onClick={() => setOpen(!open)}
              className="detailbutton cursor-pointer flex text-sm font-medium items-center bg-white    border-2 pr-2"
            >
              <img className="h-7 " src={playiconblack}></img>
              PLAY
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="flex detailbutton1 cursor-pointer   items-center   text-gray-100 border-2 border-gray-300 pr-2"
            >
              <img className="h-7 " src={playiconwhite}></img>
              Trailer
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={Add}
                className="bg-white flex detailbutton   items-center rounded-full justify-center text-center  text-black w-7 h-7"
              >
                <span className="items-center text-3xl pb-1 text-center justify-center">
                  +
                </span>
              </button>
              <GroupsIcon
                fontSize="medium"
                className="bg-white detailbutton rounded-full p-[1px] "
              />
            </div>
          </div>
          <div
            style={{ color: "rgb(249, 249, 249)" }}
            className="absolute top-[310px] ml-12 font-light text-sm"
          >
            {data?.release_date} . {data?.runtime}m . Family, Fantasy, Kids,
            Animation
          </div>
          <div
            style={{ color: "rgb(249, 249, 249)" }}
            className="absolute top-[335px] ml-12 max-w-[650px] font-medium"
          >
            {data?.overview}
          </div>
        </div>
      )}
      <div>
        <Dialog open={open} onClose={() => setOpen(!open)}>
          <DialogTitle>Subscribe</DialogTitle>
          <DialogContent className="w-[500px] h-[400px]">
            <div className="p-3  rounded-md absolute left-0 right-0 top-0 m-auto  bottom-0   bg-white">
              <div className=" float-right  mb-2">
                <div className="ml-4 ">
                  <button
                    type="button"
                    className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <span className="sr-only">Close</span>
                    <CancelIcon />
                  </button>
                </div>
              </div>
              <div className=" items-center p-5 ">
                <video
                  className="h-fit w-[500px]"
                  src={play}
                  title="live-details-video"
                  controls
                  // autoPlay
                  // muted
                  controlsList="nodownload"
                ></video>
                <h2 className="text-xl mt-5 font-medium text-red-500">
                  {data?.title}
                </h2>
                <p className="mt-1 text-sm text-gray-500 mb-0 ">
                  {data?.overview}
                </p>
              </div>
            </div>

            <DialogContentText>To subscribe to this website</DialogContentText>
          </DialogContent>
          <DialogActions></DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default Detail;
