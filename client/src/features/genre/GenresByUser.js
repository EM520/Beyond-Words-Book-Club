import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectGenreUser, getGenreUser } from './genreuserSlice'
import styles from './GenreUser.module.css'
import { Link } from 'react-router-dom'

export default function GenresByUser() {
  const genreuser = useSelector(selectGenreUser)

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
            <Link to={{
              pathname: '/search',
              search: `?q=${genre.name}`
            }}
            >
              <div className={styles.bookandtitle}>
              <div className={styles.genreUserLink}>
                <img
                  src={genre.cover_pic}
                  alt={genre.title}
                  className={styles.bookimage}
                />
                 {/* {styles.booktitle}> */}
                  <strong className={styles.gName}>{genre.name.toUpperCase()}</strong>
                {/* </a> */}
          
              </div>
              </div>
          </Link>
          </div>
          
        ))}
      </div>
      
    </>
  )
}