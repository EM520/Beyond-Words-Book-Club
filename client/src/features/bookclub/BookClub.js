import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectBookClub, getBookClub } from "./bookclubSlice"
import styles from "./BookClub.module.css"

export default function BookClub(id) {
    // const id = 1
  const bookclub = useSelector(selectBookClub)
  console.log(bookclub, "bc")
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBookClub(1))
  }, [])
  return (
    <>
      <div>
        {bookclub.map((book) => (
          <div key={"book-" + book.id}>
            <div
              style={{ backgroundImage: `url(${book.cover_pic})` }}
              className={styles.bookList}
            ></div>
            <p>{book.title}</p>
            <p>{book.copyright}</p>
            <p>{book.synopsis}</p>
            <p>{`${book.first_name} ${book.last_name}`}</p>


          </div>
        ))}
      </div>
    </>
  )
}
