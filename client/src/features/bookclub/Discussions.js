import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectDiscussion, getDiscussion, addDiscussion } from './bookclubSlice'
import styles from './BookClub.module.css'
import DiscussionMain from './DiscussionMain'
import {Divider} from 'antd'



const Discussions = ({id, gId}) => {
  const discussions = useSelector(selectDiscussion)
  // console.log(id, gId, 'id again')


  const dispatch = useDispatch()
  const [input, setInput] = useState('')
  // const [showReply, setShowReply] = useState(false)

  useEffect(() => {
    dispatch(getDiscussion(id))
  }, [])
  // console.log(discussions, 'testing')

  function handleSubmit(discussion, parent_id, group_id, id) {
    if (discussion !== '') {
      dispatch(addDiscussion({ discussion, parent_id, group_id, id }))
      setInput('')

    }
  }
  // console.log(discussions, 'yoyoyo')
  // function handleShowReply (e) {
  //   e.preventDefault()
  //   setShowReply(!showReply)
  // }

  return (
    <div className="dbtest">
      <div className={styles.discussionmain}>
        <div className={styles.discussionlist}>
          {discussions.map((disc) => (
            <div key={'discussion-' + disc.id}>
              <div className={styles.commentDiv}>
                <DiscussionMain parent={disc} id ={id}/>
                <Divider />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.commentMain}>
          <textarea
            autoFocus
            placeholder="Add a comment"
            value={input}
            className={styles.boxcomment}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <button
          onClick={() => handleSubmit(input, null, gId, id)}
          className={"submitBtn "+styles.button}
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default Discussions