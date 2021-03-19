import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import SearchBar from '../searchbar/SearchBar'
import { selectTop20, getRealTop20 } from './realTop20Slice'
import styles from './RealTop20.module.css'


export default function RealTop20() {
  const top20 = useSelector(selectTop20)
  console.log(top20)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRealTop20())
  })
  return (
    <>
   <SearchBar />

      <div className={styles.top20main}>
        {top20.map((top20) => (
          <div key={'top20-' + top20.id}>
            <img className={styles.bookList}
            src={top20.cover_pic}
            alt={top20.title}
            className={styles.bookimage}/>
          <div className={styles.description}>
            {`${top20.first_name} ${top20.last_name} - "${top20.title}" (${top20.count} posts)`}              

            </div>
          </div>
        ))}
      </div>
    </>
  )
}