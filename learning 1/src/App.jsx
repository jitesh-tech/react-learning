import React from 'react'
import Login, { Profile,Setting } from './UserComponent'

const App = () => {
  return (
    <div>
      <h1>first component of my learning</h1>
      <Fruit />
      <Login />
      <Profile />
      <Colors />
      <Setting/>


    </div>
  )
}

function Fruit(){
  return(
   <div>
    <h1>apple is there</h1>
   </div>
  )
}

function Colors(){
  return(
    <div>
      <h2>mat grey is my favourite color</h2>
    </div>
  )
}

export default App