import React, { useState } from 'react'

export default function DiscussionReplyForm(props) {
  const parentId = props.parentId
  const groupId = props.groupId
  const [input, setInput] = useState("")
  // post request here!

  function handleSubmit(e) {
    e.preventDefault()
    const discussion = {
      parent_id: parentId,
      discusion: input
    }
      // request.post(discussions/groupId, discussion)
  }
  return (
    <form action="">
      <input type="text" onChange={(e) => setInput(e.target.value)} />
    </form>
  )
}
