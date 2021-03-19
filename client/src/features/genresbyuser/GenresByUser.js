import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectGenreUser, getGenreUser } from './genreuserSlice'
import styles from './GenreUser.module.css'
import { Link } from 'react-router-dom'

export default function GenresByUser() {
  const genreuser = useSelector(selectGenreUser)
  // const genreuser = [
  //   {
  //     id: 1,
  //     cover_pic: "http://placehold.it/200x300",
  //     name: 'fiction'
  //   },
  //   {
  //     id: 2,
  //     cover_pic: "http://placehold.it/200x300",
  //     name: 'fiction'
  //   },
  //   {
  //     id: 3,
  //     cover_pic: "http://placehold.it/200x300",
  //     name: 'fiction'
  //   },
  //   {
  //     id: 4,
  //     cover_pic: "http://placehold.it/200x300",
  //     name: 'fiction'
  //   },
  //   {
  //     id: 4,
  //     cover_pic: "http://placehold.it/200x300",
  //     name: 'fiction'
  //   },
  //   {
  //     id: 4,
  //     cover_pic: "http://placehold.it/200x300",
  //     name: 'fiction'
  //   },
  //   {
  //     id: 4,
  //     cover_pic: "http://placehold.it/200x300",
  //     name: 'fiction'
  //   },
  //   {
  //     id: 4,
  //     cover_pic: "http://placehold.it/200x300",
  //     name: 'fiction'
  //   },
  //   {
  //     id: 4,
  //     cover_pic: "http://placehold.it/200x300",
  //     name: 'fiction'
  //   },
  //   {
  //     id: 4,
  //     cover_pic: "http://placehold.it/200x300",
  //     name: 'fiction'
  //   },
  //   {
  //     id: 5,
  //     cover_pic: "http://placehold.it/200x300",
  //     name: 'fiction'
  //   }

  // ]
  console.log(genreuser, 'gu')
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getGenreUser())
  }, [])
  return (
    <>
      <div className={styles.genreListMain}>
        {genreuser.map((genre) => (
          <div key={'guser-' + genre.id} className={styles.genreListsubMain}>
            <Link to="/genres" className={styles.genreUserLink}>
              <p>
                <img
                  className={styles.genreList}
                  src={genre.cover_pic}
                  alt={genre.title}
                  className={styles.bookimage}
                />
              </p>
              <div className={styles.genreLink}>
                <p>
                  {genre.name}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
