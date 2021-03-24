

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { 
    selectGenres,
    selectUserGenres, 
    deleteUserGenres,
    addUserGenres
  } from '../profile/profileSlice'
import styles from './UserGenresArray.module.css'

export default function UserGenresArray(props){
    const genres= useSelector(selectGenres)
    const userGenres= useSelector(selectUserGenres)
    const dispatch = useDispatch()

    function handleChange(genre){
      if(genre.active === true){
        dispatch(deleteUserGenres(genre.id))
      }else{
        console.log(genre)
        dispatch(addUserGenres(genre))
      }
      }
    let newgenres =genres.map((item)=>{
      let found = userGenres.find((x)=>x.id ==item.id)
      return found? {...item,active:true}:{...item,active:false}
    })
  
    return <div className={styles.combinedGenres}>
               {newgenres.map((item) => {
                 return(  
                 item.active ? 
                 (<label> <input type="checkbox" value={item.name} 
                 onChange={() => handleChange(item)} checked />{item.name}</label>)
                  : (<label><input type="checkbox" value={item.name} 
                  onChange={() => handleChange(item)}  />{item.name}</label>)
               )})}
              </div>
  }