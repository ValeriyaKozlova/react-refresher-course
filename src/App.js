import React, { useState } from 'react'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput'
import './styles/App.css'

function App() {
  const [posts, setPost] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Java', body: 'Description' },
    { id: 3, title: 'PHP', body: 'Description' }
  ])

  return (
    <div className="App">
      <form>
        <MyInput type="text" placeholder="Post name" />
        <MyInput type="text" placeholder="Post description" />
        <MyButton disabled >Create post</MyButton>
      </form>
      <PostList posts={posts} title="Posts list 1" />
    </div>
  );
}

export default App;
