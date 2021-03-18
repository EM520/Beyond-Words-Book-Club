import React, { useState } from 'react'
import { addDiscussion } from './bookclubSlice'
import { useDispatch } from 'react-redux'
import styles from './BookClub.module.css'

export default function DiscussionReplyForm({ replies }) {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  // post request here!

  function handleSubmit(e) {
    e.preventDefault()
    const discussion = {
      parent_id: replies.id,
      discussion: input,
      group_id: replies.group_id,
    }
    dispatch(addDiscussion(discussion))
    setInput('')
  }
  return (
    <form
      action=""
      onSubmit={(e) => {
        handleSubmit(e)
      }}
    >
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        className={styles.replyinput}
        autoFocus={true}
      />
    </form>
  )
}
