import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import { Link } from "react-router-dom";
import { auth } from "../firebase";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ctalogoone from "../images/ctalogoone.svg";
import ctalogotwo from "../images/ctalogotwo.png";
import { useDispatch } from "react-redux";
import { set } from "./store/userSlice";
import ImageIcon from "@mui/icons-material/Image";
import { useNavigate } from "react-router-dom";
const Login = () => {
  // const history = useHistory();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const [name, setname] = useState("");
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageFile, setimageFile] = useState([]);
  const dispatch = useDispatch();
  // const data = {
  //   username: name,
  //   photo: imageFile,
  // };
  const handleClose = (event) => {
    console.log(imageFile);
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // history.push("/");
        dispatch(set({ username: name, photo: imageFile[0] }));
        setOpen(false);
        navigate("/");
      })
      .catch((e) => alert(e.message));
  };
  const handleupload = (e) => {
    if (e.target.files) {
      setimageFile([e.target.files[0]]);
      console.log(e.target.files);
    }
  };
  return (
    <div className="text-white login flex relative items-center justify-center min-h-[93vh]">
      <div className=" items-center flex flex-col justify-center ">
        <img className="max-w-[865px] w-11/12" src={ctalogoone}></img>
        <button
          onClick={handleClickOpen}
          className="hover:bg-[#0483ee] bg-blue-700 py-2 my-2  cursor-pointer max-w-[865px] w-11/12"
        >
          GET ALL THERE
        </button>
        <div>
          <Dialog open={open} onClose={() => setOpen(!open)}>
            <DialogTitle>Subscribe</DialogTitle>
            <DialogContent className="max-w-[400px]">
              <TextField
                value={name}
                onChange={(event) => setname(event.target.value)}
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="email"
                fullWidth
                variant="standard"
              />
              <TextField
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
              />
              <TextField
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                margin="dense"
                id="name"
                label="Password"
                type="email"
                fullWidth
                variant="standard"
              />
              <div className="pt-2 pb-2">
                <label htmlFor="avatar-select">
                  <div className=" cursor-pointer flex ">
                    <ImageIcon />
                    <div className="pl-2 text-blue-600">Upload Photo</div>
                  </div>
                </label>
                <input
                  id="avatar-select"
                  className="hidden"
                  type="file"
                  name="avatar_file"
                  onChange={handleupload}
                  accept="image/png, image/gif, image/jpeg"
                />
              </div>
              {imageFile.length > 0 && (
                <div className="w-full flex mb-2 items-center justify-center">
                  <div className="a">
                    <img
                      className="w-28 h-28 rounded-full"
                      src={URL.createObjectURL(imageFile[0])}
                    ></img>
                  </div>
                </div>
              )}
              <DialogContentText>
                To subscribe to this website
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Subscribe</Button>
            </DialogActions>
          </Dialog>
        </div>
        <p className="text-[13px] max-w-[865px] w-11/12">
          Disney+ Hotstar is India's largest premium streaming platform with
          more than 100000 hours of drama and movies in 17 languages. Get
          Premier Access to Raya and the Last Dragon for with a Disney+
          subscription. As of 03/26/21, the price and The Disney Bundle will
          increase by $1.
        </p>
        <img className="max-w-[865px] w-11/12 mt-2 " src={ctalogotwo}></img>
      </div>
    </div>
  );
};

export default Login;
