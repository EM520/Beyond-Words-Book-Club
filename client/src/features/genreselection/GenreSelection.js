import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import 'antd/dist/antd.css'
import { Checkbox } from 'antd'
import styles from './GenreSelection.module.css'
import { getGenres, selectGenres } from './genreSelectionSlice'

export default function GenreSelection() {
  function onChange(checkedValues) {
    console.log('checked = ', checkedValues)
  }

  const dispatch = useDispatch()
  const genres = useSelector(selectGenres)
  useEffect(() => {
    dispatch(getGenres())
  }, [])

  const options = genres.map((genre) => {
    return { label: genre.name, value: genre.name }
  })

  return (
    <div className={styles.checkbox}>
      <h1>Genres of interest (select as many as you want!)</h1>
      <Checkbox.Group
        className={styles.checkboxes}
        options={options}
        defaultValue={['Science Fiction']}
        onChange={onChange}
      />
    </div>
  )
}
