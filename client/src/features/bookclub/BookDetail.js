import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectBookClub, getBookClub, addUserBookCollection } from './bookclubSlice'
import { useHistory, Link} from 'react-router-dom'
import styles from './BookClub.module.css'

export default function BookDetail(props) {
  const history = useHistory()

  // const id = 1
  const bookclub = useSelector(selectBookClub)
  console.log(bookclub, props.bookId,'bc1')
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBookClub(props.bookId))
  }, [])

  
  const handleJoin = (bookId) => {
    console.log(bookId, 'bb')
    dispatch(addUserBookCollection(bookId))
    history.push({pathname: '/book-club/'+bookId})
    window.location.reload()
  }


  
  return (
    <>
    <div>
        {bookclub.map((book) => (
          <div key={"book-" + book.id} className={styles.bookclubmain}>
            <img src={book.cover_pic} 
                  alt={book.title}
                  className={styles.bookCover}/>
            { !props.isPartOfGroup 
            ? <button className={"submitBtn "+styles.joinBtn} onClick={()=>handleJoin(book.id)}> Join This Club </button> : null}
            <div className={styles.description}>
            <p className={styles.parMargin}><strong>TITLE: </strong> {book.title}</p>
            <p className={styles.parMargin}> <strong>AUTHOR: </strong>
              <Link to={{
                pathname: '/search',
                search: `?q=${book.author}`
                }}
              > {book.author}
              </Link>
              </p>
              <p className={styles.parMargin, styles.synopsis}><strong>SYNOPIS: </strong>{book.synopsis}</p>
              <p className={styles.parMargin}><strong>COPYRIGHT: </strong>{book.copyright}</p>

 </div>
          </div>
        ))}
      </div>
    </>
  )
}
