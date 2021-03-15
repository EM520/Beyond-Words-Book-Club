import React, { useEffect } from "react"
import NavBar from "../headerfooter/NavBar";
import Footer from "../headerfooter/Footer";
import styles from "./Profile.module.css";
import { Link } from "react-router-dom";
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"

export default function Profile() {
  return (
    <>
      <NavBar />
      <Link className={styles.backHome} to="/home">
        Back Home Page
      </Link>
      <div className={styles.profile}>
        <div className={styles.profileInfo}>
          <div className={styles.profileGrouplist}>
          <p>Groups 1</p>
          <p>Groups 2</p>
          <p>Groups 3</p>
          <p>Groups 4</p>
          <p>Groups 5</p>
          </div>
         
          <form>
            <input placeholder="Change your Username here"/>
            <input placeholder="Change your Password here"/>
            <input placeholder="Change your Bio here"/>
          </form>
        </div>
        <div className={styles.profileImg}>
          <img src="https://i.pinimg.com/originals/4b/5d/19/4b5d1954fbb5b6bad18f0ac25c4ab3c3.png" />
          <button>Update Profile Photo</button>
        </div>
      </div>
      <div className={styles.profileGenrelist}>
        <button>Genre1</button>
        <button>Genre2</button>
        <button>Genre3</button>
        <button>Genre4</button>
        <button>Genre5</button>
        <button>Genre6</button>

      </div>
      <div className={styles.footer}><Footer/></div>
    </>
  );
}
