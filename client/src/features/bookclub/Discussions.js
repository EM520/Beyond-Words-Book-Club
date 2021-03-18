import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectDiscussion, getDiscussion, addDiscussion } from "./bookclubSlice"
import styles from "./BookClub.module.css"
import DiscussionReply from "./DiscussionReply"
import DiscussionReplyForm from "./DiscussionReplyForm"
import { Comment, Avatar } from "antd"

const Discussions = (id) => {
  const discussions = useSelector(selectDiscussion)

  // const discussions = [
  //   {
  //     "photo": "https://image.freepik.com/free-vector/young-girl-thumbs-up-sign-cartoon-set-illustration-premium-vector_56104-310.jpg",
  //     "username": "bookclub",
  //     "id": 1,
  //     "parent_id": null,
  //     "discussion": "BEST BOOK VOTED!!",
  //     "replies": [
  //       {
  //         "photo": "https://image.freepik.com/free-vector/young-girl-thumbs-up-sign-cartoon-set-illustration-premium-vector_56104-310.jpg",
  //         "username": "user1",
  //         "id": 2,
  //         "parent_id": 1,
  //         "discussion": "I agree!"
  //       }
  //     ]
  //   }
  // ]

  // console.log(discussion, "d")
  // console.log(discussion[0].children, 'children')
  const dispatch = useDispatch()
  const [input, setInput] = useState("")
  const [showReply, setShowReply] = useState(false)

  useEffect(() => {
    dispatch(getDiscussion(1))
  }, [])

  function handleSubmit(discussion, parent_id, group_id) {
    // preventDefault() 
    if (discussion !== "" ) {
    dispatch(addDiscussion({ discussion, parent_id, group_id })) 
    setInput("")
    } 
  }

  return (
    <>
      <div className={styles.discussionmain}>
        <div className={styles.discussionlist}>
          {discussions.map((disc) => (
            // className={styles.commentDiv}
            <div key={"discussion-" + disc.id}>
              <div className={styles.commentDiv}> 
                <img src={disc.photo} className={styles.discImg} />
                <div className={styles.commentUser}>
                  <p className={styles.userdate}>{disc.username} - {disc.date}</p>
                  <p>{disc.discussion}</p>
                  
              </div>

              </div>  
              <div style={{ marginLeft: "40px" }}>
                <a href="#" onClick={() => setShowReply(!showReply)} className={styles.reply}>
                  Reply
                </a>
                {disc.replies ? <DiscussionReply replies={disc.replies} /> : null }
                {showReply ? (
                  <DiscussionReplyForm replies= {disc} />
                 ) : null}   

              </div>
            </div>
          ))}
        </div>

        <div className={styles.commentMain}>
          {/* <img src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg" alt="avatar"/> */}
          {/* <form onSubmit={() => handleSubmit(input, null, 1)}> */}
            <textarea
              placeholder="Add a comment"
              value = {input}
              className={styles.boxcomment}
              onChange={(e) => setInput(e.target.value)}
            />
          {/* </form> */}
        </div>
        <button onClick={() => handleSubmit(input, null, 1)}
            className={styles.button}
          >Submit</button>

      </div>
    </>
  )
}

export default Discussions
