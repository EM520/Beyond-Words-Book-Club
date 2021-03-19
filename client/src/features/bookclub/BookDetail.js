import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectBookClub, getBookClub } from './bookclubSlice'
import styles from './BookClub.module.css'

export default function BookDetail(id) {
  // const id = 1
  const bookclub = useSelector(selectBookClub)
  console.log(bookclub, 'bc')
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBookClub(1))
  }, [])
  return (
    <>
      <div >
        {bookclub.map((book) => (
          <div key={"book-" + book.id} className={styles.bookclubmain}>
                            <img src={book.cover_pic} className={styles.bookCover}/>

            <button className={styles.join}> Join This Club </button>
            <div className={styles.description}>
            <strong>TITLE: </strong> 
              <p className={styles.parMargin}>{book.title}</p>
              <strong>COPYRIGHT: </strong>
              <p className={styles.parMargin}>{book.copyright}</p>
              <strong>SYNOPIS: </strong>
              <p className={styles.parMargin}>{book.synopsis}</p>
              <strong>AUTHOR: </strong>
              <p className={styles.parMargin}>{`${book.first_name} ${book.last_name}`}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
