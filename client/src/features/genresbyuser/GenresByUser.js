import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { selectGenreUser, getGenreUser } from './genreuserSlice'
// import NavBar from '../nav/NavBar'
import styles from './GenreUser.module.css'

export default function GenresByUser() {
    const genreuser = useSelector(selectGenreUser)
    console.log(genreuser)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getGenreUser())
    }, [])
    return (
      <>
      {/* <NavBar /> */}
      <div className ="genreListMain">
        {genreuser.map((genre) => (
            <div key={'guser-' + genre.id}>
          <div  style={{ backgroundImage: `url(${genre.cover_pic})` }}
                className = {styles.genreList}
          >
        </div>  
            <p>{genre.name}</p>   
         </div>    
        ))}
      </div>
      </>
    )    

}