import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectSearch, getSearch } from './searchSlice'
import { Link, useLocation } from 'react-router-dom'
import SearchBar from '../search/SearchBar'
import styles from './Search.module.css'

export default function SearchResultsPage() {
  // console.log(props, 'idC')
  // const id = 1
  const search = useSelector(selectSearch)
  const dispatch = useDispatch()
  const location = useLocation()
  const urlParams = location.search
  const searchParam = urlParams.substring(3)
  let searchTitle = searchParam.replaceAll('%20', ' ')
  console.log(searchTitle, 'loc')

  useEffect(() => {
    dispatch(getSearch(urlParams))
  }, [])
console.log()
  return (
    
      <div className="container1">
         <div>
          <SearchBar />
        </div>
        
        <div className={styles.searchTitle}>
       
          {searchTitle ? <h1>{searchTitle}</h1> : <h1>all results</h1>}
        
        {search.map((s) => (
          <Link
            key={'search-' + s.genre_id}
            to={{ pathname: '/book-club/' + s.id }}
          >
            <div
              key={'search-' + s.genre_id}
              className={styles.searchContainer}
            >
              <img src={s.cover_pic} className={styles.bookImg} />
              <div className={styles.bookinfo}>
                <p>
                  <strong>TITLE: </strong> {s.title}
                </p>
                <p>
                  <strong>AUTHOR: </strong>
                  {s.author}
                </p>
                <p>
                  <strong>GENRE: </strong>
                  {s.name}
                </p>
                <p>
                  <strong>COPYRIGHT: </strong>
                  {s.copyright}
                </p>
              </div>
            </div>
          </Link>
          
        ))}
        </div>
      </div>
    
  )
}
// style={props.isDisable ? 'disabled:true' : 'disabled:false'}
