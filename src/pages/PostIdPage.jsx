import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import PostService from '../API/PostService'
import Loader from '../components/UI/loader/Loader'
import { useFetching } from '../hooks/useFetching'

export default function PostIdPage() {
  const params = useParams()
  const [post, setPost] = useState({})
  const [fetchPost, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getPost(id)
    setPost(response.data)
  })

  useEffect(() => {
    fetchPost(params.id)
  }, [])

  return (
    isLoading ? <Loader />
      : <div>
        <h1>{post.id} {post.title} </h1>
        <div>{post.body}</div>
      </div>
  )
}
