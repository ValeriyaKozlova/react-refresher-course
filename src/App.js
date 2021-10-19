import React, { useState, useEffect } from 'react'
import PostService from './API/PostService'
import PostFilter from './components/PostFilter'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton'
import PostForm from './components/UI/form/PostForm'
import Loader from './components/UI/loader/Loader'
import MyModal from './components/UI/modal/MyModal'

import { usePosts } from './hooks/usePosts'
import './styles/App.css'

function App() {
  const axios = require('axios').default;
  const [posts, setPosts] = useState([])
  const [isPostsloading, setIsPostsLoading] = useState(false)
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  useEffect(() => {
    fetchPosts()

  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false)
  }

  async function fetchPosts() {
    setIsPostsLoading(true)
    const posts = await PostService.getAll();
    setPosts(posts)
    setIsPostsLoading(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton style={{ marginTop: "30px" }} onClick={() => setModal(true)} >
        Create post
        </MyButton>
      <MyModal visible={modal} setVisible={setModal} >
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      { isPostsloading ?
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
        ><Loader /></div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Posts list 1" />
      }
    </div>
  );
}

export default App;
