import React, { useState, useEffect } from "react";
import NavBar from "../headerfooter/NavBar";
import styles from "./Profile.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  selectUser,
  selectBookUser,
  selectGenreUser,
  getUser,
  getBookUser,
  getGenreUser,
} from "./profileSlice";

export default function Profile() {
  const user = useSelector(selectUser);
  const bookuser = useSelector(selectBookUser);
  const genreuser = useSelector(selectGenreUser);
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const [username, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  useEffect(() => {
    dispatch(getUser());
    dispatch(getBookUser());
    dispatch(getGenreUser());
  }, []);
  function handleSubmit(e) {
    e.preventDefault();

    setMessage("Congrats!Profile Updated!");

    setUserName("");
    setEmail("");
    setBio("");
  }

  return (
    <>
      <NavBar />
      <div className={styles.profile}>
        <div className={styles.profileInfo}>
          <div className={styles.profileGrouplist}>
            {bookuser.map((item) => (
              <p key={"bookuser-" + item.id}>{item.title}</p>
            ))}
          </div>

          <form onSubmit={handleSubmit} className={styles.profileForm}>
            <div className={styles.profileUpdate}>
              <input
                value={username}
                type="text"
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Change your Username here"
              />

              <input
                value={email}
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Change your Password here"
              />

              <input
                value={bio}
                type="text"
                onChange={(e) => setBio(e.target.value)}
                placeholder="Change your Bio here"
              />
            </div>
            <div className={styles.profileSubmit}>
              <button>Submit</button>
              <label htmlFor="profileupdate">{message}</label>
            </div>
          </form>
        </div>
        <div>
          {user.map((item) => (
            <div key={"user-" + item.id} className={styles.profileImg}>
              <img src={item.photo} />
              <button>Update Profile Photo</button>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.profileGenrelist}>
        {genreuser.map((item) => (

        <p key={"genreuser-" + item.id}>{item.name}
          <input type="checkbox"/>
          <span class="checkmark"></span>
        </p>
          
        ))}
      </div>

      {/* <Footer/> */}
    </>
  );
}
// src="https://i.pinimg.com/originals/4b/5d/19/4b5d1954fbb5b6bad18f0ac25c4ab3c3.png"
