import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectDiscussion, getDiscussion, addDiscussion } from "./bookclubSlice"
import styles from "./BookClub.module.css"
import DiscussionReply from "./DiscussionReply"
import DiscussionReplyForm from "./DiscussionReplyForm"

const Discussions = (id) => {
//   const discussion = useSelector(selectDiscussion)

const discussions = [
  {
    "photo": "https://image.freepik.com/free-vector/young-girl-thumbs-up-sign-cartoon-set-illustration-premium-vector_56104-310.jpg",
    "username": "bookclub",
    "id": 1,
    "parent_id": null,
    "discussion": "BEST BOOK VOTED!!",
    "replies": [
      {
        "photo": "https://image.freepik.com/free-vector/young-girl-thumbs-up-sign-cartoon-set-illustration-premium-vector_56104-310.jpg",
        "username": "user1",
        "id": 2,
        "parent_id": 1,
        "discussion": "I agree!"
      }
    ]
  }
]

  // console.log(discussion, "d")
  // console.log(discussion[0].children, 'children')
  const dispatch = useDispatch()
  const [input, setInput] = useState("")
  const [showInput, setShowInput] = useState(false)
  //   const [parent, setParent] = useState(null)

  useEffect(() => {
    dispatch(getDiscussion(1))
  }, [])

  function handleSubmit(comment, parent, groupid) {
    dispatch(addDiscussion({ comment, parent, groupid }))
  }

  return (
    <>
      {/* className={styles.discussionmain} */}
      <div className={styles.discussionmain}>
      {/* className={styles.discussionlist} */}
        <div className={styles.discussionlist}>
          {discussions.map((disc) => (
            // className={styles.commentDiv}
            <div key={"discussion-" + disc.id}>
              <img src={disc.photo} className={styles.discImg} />
              <p>{disc.discussion}</p>
              <div style={{marginLeft: '40px'}}>
                <DiscussionReplyForm parentId={disc.parent_id} />
                <a href="#" onClick={()=>setShowInput(true)}>Reply</a>
                <DiscussionReply replies={disc.replies} />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.commentMain}>
          {/* <img src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg" alt="avatar"/> */}
          {/* handleSubmit(input, 0, discussion[0].group_id) */}
          <form onSubmit={() => console.log('a')}>
            <input
              placeholder="Add a comment"
              className={styles.boxcomment}
              onChange={(e) => setInput(e.target.value)}
            />
          </form>
        </div>
      </div>
    </>
  )
}

export default Discussions