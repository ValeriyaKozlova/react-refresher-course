import React from 'react'

export default function PostItem(props) {
  const { id, title, body, number } = props.post

  return (
    <div className="post" >
      <div className="post__content">
        <strong id={id}>{props.number}. {title}</strong>
        <div>
          {body}
        </div>
      </div>
      <div className="post__btns">
        <button>Delete</button>
      </div>
    </div>
  )
}
