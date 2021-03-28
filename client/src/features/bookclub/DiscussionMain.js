import styles from './BookClub.module.css'
import React, { useState } from 'react'
import DiscussionReply from './DiscussionReply'
import DiscussionReplyForm from './DiscussionReplyForm'

export default function DiscussionMain({parent, id}) {
    const [showReply, setShowReply] = useState(false)

    console.log(parent.username, 'dm')

    function handleShowReply (e) {
        e.preventDefault()
        setShowReply(!showReply)
      }
    
  return (
    <>
    <div className= {styles.replyView}>
        <img src={parent.photo} 
            alt={parent.id}
            className={styles.discImg} />
        <div className={styles.commentUser}>
            <p className={styles.userdate}>
                {parent.username} - {parent.date}
            </p>
            <p>{parent.discussion}</p>
        </div>
    </div>
    <div style={{ marginLeft: '40px' }}>
        <button
            onClick={handleShowReply}
            className={styles.reply}
        >
            Reply
        </button> 
        {parent.replies ? (
                  <DiscussionReply replies={parent.replies} />
                ) : null}
                {showReply ? <DiscussionReplyForm replies={parent} id = {id}/> : null}
    </div>
                
</>
  )
}