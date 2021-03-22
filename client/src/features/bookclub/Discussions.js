import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectDiscussion, getDiscussion, addDiscussion } from './bookclubSlice'
import styles from './BookClub.module.css'
import DiscussionReply from './DiscussionReply'
import DiscussionReplyForm from './DiscussionReplyForm'
import { Comment, Avatar } from 'antd'

const Discussions = ({id}) => {
  const discussions = useSelector(selectDiscussion)
  console.log(id, 'id again')


  const dispatch = useDispatch()
  const [input, setInput] = useState('')
  const [showReply, setShowReply] = useState(false)

  useEffect(() => {
    dispatch(getDiscussion(id))
  }, [])

  function handleSubmit(discussion, parent_id, group_id) {
    // preventDefault()
    if (discussion !== '') {
      dispatch(addDiscussion({ discussion, parent_id, group_id }))
      setInput('')
    }
  }

  function handleShowReply (e) {
    e.preventDefault()
    setShowReply(!showReply)
  }

  return (
    <>
      {/* className={styles.discussionmain} */}
      <div className={styles.discussionmain}>
        {/* className={styles.discussionlist} */}
        <div className={styles.discussionlist}>
          {discussions.map((disc) => (
            // className={styles.commentDiv}
            <div key={'discussion-' + disc.id}>
              <div className={styles.commentDiv}>
                <img src={disc.photo} className={styles.discImg} />
                <div className={styles.commentUser}>
                  <p className={styles.userdate}>
                    {disc.username} - {disc.date}
                  </p>
                  <p>{disc.discussion}</p>
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
                {disc.replies ? (
                  <DiscussionReply replies={disc.replies} />
                ) : null}
                {showReply ? <DiscussionReplyForm replies={disc} /> : null}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.commentMain}>
          {/* <img src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg" alt="avatar"/> */}
          {/* <form onSubmit={() => handleSubmit(input, null, 1)}> */}
          <textarea
            placeholder="Add a comment"
            value={input}
            className={styles.boxcomment}
            onChange={(e) => setInput(e.target.value)}
          />
          {/* </form> */}
        </div>
        <button
          onClick={() => handleSubmit(input, null, id)}
          className={styles.button}
        >
          Submit
        </button>
      </div>
    </>
  )
}

export default Discussions