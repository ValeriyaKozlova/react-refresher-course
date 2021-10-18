import React from 'react'
import PostItem from './PostItem'

export default function PostList({ posts, title, remove }) {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}
    >There are no posts</h1>
  }
  return (
    <div>
      <h1
        style={{ textAlign: 'center' }}>
        {title}
      </h1>
      {posts.map((post, index) => {
        return <PostItem remove={remove} number={index + 1} post={post} key={post.id} />
      })}
    </div>
  )
}
