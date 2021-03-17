import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectDiscussion, getDiscussion, addDiscussion } from "./bookclubSlice"
import styles from "./BookClub.module.css"

const Discussions = (id) => {
  const discussion = useSelector(selectDiscussion)
  console.log(discussion, "d")
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
      <div className={styles.discussionmain}>
        <div className={styles.discussionlist}>
          {discussion.map((disc) => (
            <div key={"discussion-" + disc.id} className={styles.commentDiv}>
              <img src={disc.photo} className={styles.discImg} />
              <p>{disc.discussion}</p>
              <div>
                <br />
                <a href="#" onClick={()=>setShowInput(true)}>Reply</a>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.commentMain}>
          {/* <img src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg" alt="avatar"/> */}
          <form onSubmit={() => handleSubmit(input, 0, discussion[0].group_id)}>
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
