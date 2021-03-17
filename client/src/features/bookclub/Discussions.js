import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectDiscussion, getDiscussion, addDiscussion } from "./bookclubSlice"
import styles from "./BookClub.module.css"

const Discussions = (id) => {
//   const discussion = useSelector(selectDiscussion)

const discussion = [
  {
    parent_id: 1,
    discussion: 'BEST BOOK VOTED!!',
    child_id: null,
    group_id: 1,
    photo: 'https://image.freepik.com/free-vector/young-girl-thumbs-up-sign-cartoon-set-illustration-premium-vector_56104-310.jpg',
    first_name: 'Marissa',
    children: [
        {
            discussion: 'not good for me',
            parent_id: 1,
            child_id: 1,
            group_id: 1,
            photo: 'https://image.freepik.com/free-vector/young-girl-thumbs-up-sign-cartoon-set-illustration-premium-vector_56104-310.jpg',
            first_name: 'Marissa'
        }
    ]
  },
{

    parent_id: 2,
    discussion: 'Meh!!',
    child_id: null,
    group_id: 1,
    photo: 'https://image.freepik.com/free-vector/young-girl-thumbs-up-sign-cartoon-set-illustration-premium-vector_56104-310.jpg',
    first_name: 'Marissa',
    children: [
        {
            discussion: 'not good for me',
            parent_id: 2,
            child_id: 1,
            group_id: 1,
            photo: 'https://image.freepik.com/free-vector/young-girl-thumbs-up-sign-cartoon-set-illustration-premium-vector_56104-310.jpg',
            first_name: 'Marissa'
        }
    ]
  },

]

  console.log(discussion, "d")
  console.log(discussion[0].children, 'children')
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
                    {discussion[0].children.map((child) => (
                        <li>
                            {child.discussion}
                        </li>
                    ))}
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