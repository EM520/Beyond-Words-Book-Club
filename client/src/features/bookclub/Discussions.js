import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectDiscussion, getDiscussion, addDiscussion } from "./bookclubSlice"
import styles from "./BookClub.module.css"

const Discussions = (id) => {
  const discussion = useSelector(selectDiscussion)
  console.log(discussion, 'd')
  const dispatch = useDispatch()
  const [input, setInput] = useState("")
//   const [parent, setParent] = useState(null)

  useEffect(() => {
    dispatch(getDiscussion(1))
  }, [])

  function handleSubmit (comment, parent, groupid){
    //   alert (groupid)
    dispatch(addDiscussion({comment, parent, groupid}))
  }
//   function handleSubmit (obj){
//       {comment}
//     dispatch(addDiscussion(comment, parent, groupid))
//   }


  return (
    <>
      <div className={styles.discussionmain}>
      <div className={styles.discussionlist}>

        {discussion.map((disc) => (
            <div >
              <img src = {disc.photo} className={styles.discImg} />
              <p>{disc.discussion}</p>
              </div>
        ))}
                  </div>


        <div className={styles.commentMain}>
          {/* <img src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg" alt="avatar"/> */}
          <form
            onSubmit={() => handleSubmit( input,1, 1)}
            
          >
            <input placeholder="Add a comment" 
            className={styles.boxcomment} 
            onChange={(e)=> setInput(e.target.value)}
            />
          </form>
        </div>
      </div>
    </>
  )
}

export default Discussions
