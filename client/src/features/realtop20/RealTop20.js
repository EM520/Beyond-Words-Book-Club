import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import SearchBar from '../search/SearchBar'
import { selectTop20, getRealTop20 } from './realTop20Slice'
import styles from './RealTop20.module.css'
import RealTop20Footer from './RealTop20Footer'
import { Link } from 'react-router-dom'


export default function RealTop20() {
  const top20 = useSelector(selectTop20)
  console.log(top20)
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRealTop20())
    
  }, [])
  return (
    <div className="container1">
   <SearchBar />
  <div className={styles.pagetitle}>
    <h1> Top 20 Clubs</h1>
    <h6>Join!  Discuss!</h6>
  </div> 
  <div className={styles.top20main}>
    {top20.map((top20) => (
     <Link to={{pathname: '/book-club/'+top20.id}} key={'top20-' + top20.id}>
      <div key={'top20-' + top20.id}>
          <img className={styles.bookList}
          src={top20.cover_pic}
          alt={top20.title}
          className={styles.bookimage}/>

        <div className={styles.description}>
            {`${top20.first_name} ${top20.last_name} - "${top20.title}" 
            (${top20.count} ${(top20.count == 1) ? "post" : "posts"})`}              
        </div>
      </div> 
      </Link>  
    ))}
          <RealTop20Footer />
  </div>
  </div>
  )
}