import React, { useState } from 'react'
import PostList from './components/PostList'
import PostForm from './components/UI/form/PostForm'
import MyInput from './components/UI/input/MyInput'
import MySelect from './components/UI/select/MySelect'
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Java', body: 'Description' },
    { id: 3, title: 'PHP', body: 'Description' }
  ])

  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  function getSortedPosts() {
    console.log("sorted function called")
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  }
  const sortedPosts = getSortedPosts()
  const createPost = (newPost) => {
    setPosts([...posts, { ...newPost, id: Date.now, }])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  }
  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <MyInput
        value={searchQuery}
        placeholder="Searching..."
        onChange={e => setSearchQuery(e.target.value)}
      />
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Sorting"
        options={[
          { value: 'title', name: "Name" },
          { value: 'body', name: "Description" }
        ]}
      />
      {posts.length !== 0 ?
        <PostList remove={removePost} posts={sortedPosts} title="Posts list 1" /> :
        <h1 style={{ textAlign: "center" }}
        >There are no posts</h1>
      }
    </div>
  );
}

export default App;
