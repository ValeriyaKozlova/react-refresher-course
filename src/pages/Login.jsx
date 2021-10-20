import React from 'react'
import MyButton from '../components/UI/button/MyButton'
import MyInput from '../components/UI/input/MyInput'

export default function Login() {
  return (
    <div>
      <h1>Login page</h1>
      <form>
        <MyInput type="text" placeholder="Your login" />
        <MyInput type="password" placeholder="Your password" />
        <MyButton>Login</MyButton>
      </form>
    </div>
  )
}
