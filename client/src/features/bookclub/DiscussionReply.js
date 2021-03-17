import React from 'react'

export default function DiscussionReply(props) {
  return (
    <div>
      {props.replies.map((child) => (
          <li>
              {child.discussion}
          </li>
      ))}
    </div>
  )
}
