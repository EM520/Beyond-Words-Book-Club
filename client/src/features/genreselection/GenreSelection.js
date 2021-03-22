import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import 'antd/dist/antd.css'
import { Checkbox } from 'antd'
import styles from './GenreSelection.module.css'
import { getGenres, selectGenres } from './genreSelectionSlice'

export default function GenreSelection(props) {
  function onChange(checkedValues) {
    // console.log('checked = ', checkedValues)
    props.onGenreSelectChange(checkedValues)
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

  return (
    <div className={styles.checkbox}>
      <h1>Genres of interest (select as many as you want!)</h1>
      
      <Checkbox.Group
        className={styles.checkboxes}
        options={options}

        onChange={onChange}
      />
    </div>
  )
}
