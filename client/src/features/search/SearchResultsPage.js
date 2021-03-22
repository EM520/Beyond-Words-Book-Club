import React, { useState, useEffect } from 'react'
import NavBar from '../headerfooter/NavBar'
import Footer from '../headerfooter/Footer'
import styles from './Search.module.css'
// import { Select } from 'antd';

export default function Search() {
  const booklist=[
    {id:1,name:"book1",pic:"#"},
    {id:2,name:"book2",pic:"#"},
    {id:3,name:"book3",pic:"#"},
    {id:4,name:"book4",pic:"#"},
    {id:5,name:"book5",pic:"#"},
    {id:6,name:"book6",pic:"#"},
  ]
    
  
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.searchbar}>
          <div>
              <label>Sort by:</label>
              <select>
                <option>---Most Popular---</option>
                <option>BookName</option>
                <option>Author</option>
                <option>Rank</option>
              </select>
          </div>
          
          <div className={styles.searchbarlabel2}>
              <label>Item per page:</label>
              <select>
                <option>30</option>
                <option>20</option>
                <option>10</option>
              </select>
          </div>
          
        </div>
        <div className={styles.searchlist}>
          {booklist.map((book)=>(
            <>
            <li 
            key={'book-' + book.id}
            className={styles.searchlistli}
            >
              <img src={book.pic} width="150px" height="200px"/>
              {book.name}
              </li>
            </>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

