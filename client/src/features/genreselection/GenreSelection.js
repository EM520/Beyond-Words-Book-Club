import React, { useState,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import 'antd/dist/antd.css'
import { Checkbox } from 'antd'
import styles from './GenreSelection.module.css'
import { getGenres, selectGenres ,addUserGenres,} from './genreSelectionSlice'
import {useHistory} from "react-router-dom"
import SubmitBtn from '../submitBtn/SubmitBtn'

export default function GenreSelection(props) {
  const [selectedGenres,setSelectedGenres]=useState([])
  const history = useHistory()
  function onChange(checkedValues) {
    
    props.onGenreSelectedChange(checkedValues)
    console.log('checkedGenresId = ', checkedValues)
    setSelectedGenres(checkedValues)
    console.log(selectedGenres,"store selectedGenres*****")
    
  }


  const dispatch = useDispatch()
  const genres = useSelector(selectGenres)
  useEffect(() => {

  dispatch(getGenres())
  }, [])
   console.log(genres)
  const options = genres.map((genre) => {

    
    return { label: genre.name, value:genre.id }
        

  })

  function handleClick(selectedGenres){
    
    dispatch(addUserGenres(selectedGenres))
    // alert("Your favorite genres added!")
    props.isSignUp ? history.push({pathname:'/home'}): window.location.reload()
    console.log(selectedGenres,">>>>>>selectedGenresbyclick>>>")
  }

  return (
    <div className={styles.checkbox}>
      <h1>Genres of interest (select as many as you want!)</h1>
      
      <Checkbox.Group
        className={styles.checkboxes}
        options={options}
        onChange={onChange}

      />
      <button type="submit" onClick={()=>handleClick(selectedGenres)}>ADD NEW GENRES</button>
      {/* <SubmitBtn onClick={()=>handleClick(selectedGenres)} /> */}
    </div>
  )
  
}
