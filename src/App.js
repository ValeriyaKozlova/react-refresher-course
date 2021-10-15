import React, { useState } from 'react'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput'
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Java', body: 'Description' },
    { id: 3, title: 'PHP', body: 'Description' }
  ])

  const [post, setPost] = useState({ title: '', body: '' })

  const addNewPost = (e) => {
    e.preventDefault()
    setPosts([...posts, { ...post, id: Date.now, }])
    setPost({ title: '', body: '' })
  }

  return (
    <div className="App">
      <form>
        <MyInput value={post.title} onChange={e => setPost({ ...post, title: e.target.value })} type="text" placeholder="Post name" />
        <MyInput value={post.body} onChange={e => setPost({ ...post, body: e.target.value })} type="text" placeholder="Post description" />
        <MyButton onClick={addNewPost} >Create post</MyButton>
      </form>
      <PostList posts={posts} title="Posts list 1" />
    </div>
  );
}

export default App;
