import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import PostService from '../API/PostService'
import Loader from '../components/UI/loader/Loader'
import { useFetching } from '../hooks/useFetching'

export default function PostIdPage() {
  const params = useParams()
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  const [fetchPost, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getPost(id)
    setPost(response.data)
  })

  const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getComments(id)
    console.log(response)
    setComments(response.data)
  })

  useEffect(() => {
    fetchPost(params.id)
    fetchComments(params.id)
  }, [])

  return (
    isLoading ? <Loader />
      : <div>
        <h1>{post.id} {post.title} </h1>
        <div>{post.body}</div>
        <h2>Comments</h2>
        {
          isComLoading ? <Loader /> :
            comments?.map(comment =>
              <div key={comment.id} style={{ marginTop: "15px" }} >
                <h3>{comment.email}</h3>
                <div>{comment.body}</div>
              </div>
            )
        }
      </div>
  )
}
