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
        <Link key={"search-" + s.genre_id} to={{pathname: '/book-club/'+s.id}}>
        <div  key={"search-" + s.genre_id} className={styles.searchContainer}>  

          <div  >
            <img src={s.cover_pic} className={styles.bookImg}/>
            </div>
            <div className={styles.bookinfo}>  
            <p><strong>TITLE: </strong> {s.title}</p>
            <p><strong>AUTHOR: </strong>{s.author}</p>
            <p><strong>GENRE: </strong>{s.name}</p>  
            <p><strong>COPYRIGHT: </strong>{s.copyright}</p>
              </div>
            
              </div>

        </Link>  
        ))}
      </div>
    </>
  )
}
// style={props.isDisable ? 'disabled:true' : 'disabled:false'}
