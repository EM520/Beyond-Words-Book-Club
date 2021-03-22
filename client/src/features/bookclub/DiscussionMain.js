import styles from './BookClub.module.css'
import React, { useState } from 'react'
export let clickReply = true

export default function DiscussionMain({parent}) {
    const [showReply, setShowReply] = useState(false)

    console.log(parent.username, 'dm')

    function handleShowReply (e) {
        e.preventDefault()
        setShowReply(!showReply)

        clickReply = showReply
        console.log (clickReply, showReply, 'cs')
        // export const showReply 
      }
    
  return (
    <>
    <div>

        <img src={parent.photo} className={styles.discImg} />
        <div className={styles.commentUser}>
            <p className={styles.userdate}>
                {parent.username} - {parent.date}
            </p>
            <p>{parent.discussion}</p>
        </div>
    </div>
    <div style={{ marginLeft: '40px' }}>
        <a
            href="#"
            onClick={handleShowReply}
            className={styles.reply}
        >
            Reply
        </a> 
    </div>
</>
  )
}

