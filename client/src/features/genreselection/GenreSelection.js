import React, { useState,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import 'antd/dist/antd.css'
import { Checkbox } from 'antd'
import styles from './GenreSelection.module.css'
import { getGenres, selectGenres ,addUserGenres,} from './genreSelectionSlice'

export default function GenreSelection(props) {

  function onChange(checkedValues) {
    
    props.onGenreSelectedChange(checkedValues)
    // console.log('checked = ', checkedValues)
  }
  const [selectedGenres,setSelectedGenres]=useState([])
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
    console.log(selectedGenres)
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
    </div>
  )
}
