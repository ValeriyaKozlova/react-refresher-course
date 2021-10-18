import React from 'react'

export default function PostItem(props) {
  const { id, title, body } = props.post

  return (
    <div className="post" >
      <div className="post__content">
        <strong id={props.id}>{props.number}. {title}</strong>
        <div>
          {body}
        </div>
      </div>
      <div className="post__btns">
        <button onClick={() => props.remove(props.post)} >Delete</button>
      </div>
    </div>
  )
}
