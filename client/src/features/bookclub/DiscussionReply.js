import React from 'react'
import styles from "./BookClub.module.css"

export default function DiscussionReply(props) {
  return (
    <div>
      {props.replies.map((child) => (
          <li className = {styles.commentMain} key = {"reply-"+child.id}>
             <img src= {child.photo}  /> 
             <div>
             <p className={styles.userdate}>{child.username} - {child.date}</p>
                  <p>{child.discussion}</p>
              </div>  
          </li>
      ))}
    </div>
  )
}
