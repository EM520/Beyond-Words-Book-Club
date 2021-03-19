import React, { useEffect, useDispatch, useSelector  } from 'react'
import SearchBar from '../searchbar/SearchBar'
import { selectTop20, getTop20 } from './realTop20Slice'
import styles from './RealTop20.module.css'


export default function RealTop20() {
  // const top20 = useSelector(selectTop20)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(getTop20())
  // })
  return (
    <>
   <SearchBar />

      {/* <div className={styles.top20main}>
        {top20.map((top20) => (
          <div key={'top20-' + book.id}>
            <img className={styles.bookList}
            src={book.cover_pic}
            alt={book.title}
            className={styles.bookimage}/>

            <div className={styles.description}>
              <p>{`${authors.first_name} ${authors.last_name}`} - `${books.title}` (`${discussions.discussion}`</p>//               

            </div>
          </div>
        ))}
      </div> */}
    </>
  )
}