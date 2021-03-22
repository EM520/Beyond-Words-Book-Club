import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectSearch, getSearch } from './searchSlice'
import {Link, useLocation } from 'react-router-dom'
import SearchBar from '../search/SearchBar'
import styles from './Search.module.css'

export default function SearchResultsPage() {
  // console.log(props, 'idC')
  // const id = 1
  const search = useSelector(selectSearch)
  const dispatch = useDispatch()
  const location = useLocation()
  useEffect(() => {
    dispatch(getSearch(location.search))
  }, [])
  return (
    <>
      <div >
        <div>
          <SearchBar />
        </div>
        {search.map((s) => (
        <Link to={{pathname: '/book-club/'+s.id}}>
        <div  key={"search-" + s.genre_id} className={styles.searchContainer}>  

          <div  >
            <img src={s.cover_pic} className={styles.bookImg}/>
            </div>
            <div>  
            <p><strong>TITLE: </strong> {s.title}</p>
 
              <strong>COPYRIGHT: </strong>
              <p>{s.copyright}</p>
              <strong>AUTHOR: </strong>
              <p>{s.author}</p>
              </div>
            
              </div>

        </Link>  
        ))}
      </div>
    </>
  )
}
// style={props.isDisable ? 'disabled:true' : 'disabled:false'}
