import React from 'react'
import styles from './BookClub.module.css'

export default function DiscussionReply(props) {
  return (
    <div>
      {props.replies.map((child) => (
        <li className={styles.replyView} key={'reply-' + child.id}>
          <img src={child.photo} alt={child.username} />
          <div className={styles.commentUser}>
            <p className={styles.userdate}>
              {child.username} - {child.date}
            </p>
            <p>{child.discussion}</p>
          </div>
        </li>
      ))}
    </div>
  )
}
