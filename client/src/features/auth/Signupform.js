import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import request from '../../utils/request'
import styles from './Signupform.module.css'
import NavBar from '../headerfooter/NavBar'
import Footer from '../headerfooter/Footer'
import { selectGenre, setGenres, getGenres, addGenres } from './signupformSlice'

export default function Signupform() {
  const genre = useSelector(selectGenre)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getGenres())
  }, [])

  function handleSubmit() {
    //   dispatch (addGenres())
  }

  return (
    <>
      <NavBar />

      <div className={styles.signupform}>
        <form onSubmit={handleSubmit}>
          <div className={styles.signupform1}>
            <input placeholder="Input your username" />
            <input placeholder="Input your password" />
            <input placeholder="Comfirm your password" />
            <input placeholder="Input your Email" />
            <textarea
              name="signupform1"
              rows="9"
              cols="50"
              placeholder="Talk about yourself"
            ></textarea>
          </div>

          <div className={styles.signupform2}>
            <div className={styles.signupAvatar}>Upload Your Avatar</div>
            <button className={styles.uploadBtn}>Upload your avatar</button>
            <input placeholder="Input your first name" />
            <input placeholder="Input your last name" />
          </div>
        </form>

        <button className={styles.submitBtn}>Submit</button>

        <div className={styles.signupformGenreList}>
          <h1>Choose your Favorite Genre</h1>
          <div className={styles.signupformGenreListp}>
            {genre.map((item) => (
              <>
                <p key={'genre-' + item.id}>
                  {item.name}
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </p>
              </>
            ))}
          </div>
          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}
