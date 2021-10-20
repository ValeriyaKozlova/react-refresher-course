import React from 'react'
import { useHistory } from 'react-router'

export default function PostItem(props) {
  const { id, title, body } = props.post
  const router = useHistory()
  return (
    <div className="post" >
      <div className="post__content">
        <strong id={props.id}>{id}. {title}</strong>
        <div>
          {body}
        </div>
      </div>
      <div className="post__btns">
        <button onClick={() => router.push(`/posts/${id}`)} >Open</button>
        <button onClick={() => props.remove(props.post)} >Delete</button>
      </div>
    </div>
  )
}
