import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectDiscussion, getDiscussion, addDiscussion } from './bookclubSlice'
import styles from './BookClub.module.css'
// import DiscussionReply from './DiscussionReply'
// import DiscussionReplyForm from './DiscussionReplyForm'
import DiscussionMain from './DiscussionMain'
import {Divider} from 'antd'


// import { Comment, Avatar } from 'antd'

const Discussions = ({id, gId}) => {
  const discussions = useSelector(selectDiscussion)
  console.log(id, gId, 'id again')


  const dispatch = useDispatch()
  const [input, setInput] = useState('')
  const [showReply, setShowReply] = useState(false)

  useEffect(() => {
    dispatch(getDiscussion(id))
  }, [])

  function handleSubmit(discussion, parent_id, group_id, id) {
    // preventDefault()
    if (discussion !== '') {
      dispatch(addDiscussion({ discussion, parent_id, group_id, id }))
      setInput('')

    }
  }
  console.log(discussions, 'yoyoyo')
  function handleShowReply (e) {
    e.preventDefault()
    setShowReply(!showReply)
  }

  return (
    <>
      <div className={styles.discussionmain}>
        <div className={styles.discussionlist}>
          {discussions.map((disc) => (
            <div key={'discussion-' + disc.id}>
              <div className={styles.commentDiv}>
                <DiscussionMain parent={disc} id ={id}/>
                <Divider />
                {/* <img src={disc.photo} className={styles.discImg} />
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
                </a> */}

                {/* {disc.replies ? (
                  <DiscussionReply replies={disc.replies} />
                ) : null} */}
                {/* <DiscussionReplyForm replies={disc} id = {id} showKInput={showReply} /> */}
                {/* {showReply ? <DiscussionReplyForm replies={disc} id = {id} showInput={showReply}/> : null}
                <Divider /> */}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.commentMain}>
          <textarea
            placeholder="Add a comment"
            value={input}
            className={styles.boxcomment}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <button
          onClick={() => handleSubmit(input, null, gId, id)}
          className={styles.button}
        >
          Submit
        </button>
      </div>
    </>
  )
}

export default Discussions