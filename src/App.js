import React, { useState, useEffect } from 'react'
import PostService from './API/PostService'
import PostFilter from './components/PostFilter'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton'
import PostForm from './components/UI/form/PostForm'
import Loader from './components/UI/loader/Loader'
import MyModal from './components/UI/modal/MyModal'
import { useFetching } from './hooks/useFetching'
import { getPageCount, getPagesArray } from "./components/utils/pages"

import { usePosts } from './hooks/usePosts'
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })
  let pagesArray = getPagesArray(totalPages)

  useEffect(() => {
    fetchPosts()

  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false)
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
      {postError && <h1>{postError}</h1>}
      { isPostsLoading ?
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
        ><Loader /></div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Posts list 1" />
      }
      <div className="page__wrapper">
        {
          pagesArray.map(p =>
            <span
              className={page === p ? 'page page__current' : 'page'}
              key={p}
              onClick={() => setPage(p)}
            >
              {p}
            </span>
          )
        }
      </div>
    </div>
  );
}

export default App;
