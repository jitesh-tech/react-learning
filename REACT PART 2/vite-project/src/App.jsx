import React from 'react'
import Learning from './Learning';
import Learning2 from './Learning2';

const App = () => {
  const name = " jitesh"
  let x = 10
  let y = 20
  // now i will show you to call the function
  function fruit(){
    return "apple"
  }
  
  // if you wnat to pass the paramentre
  function sum(a,b) {
    return a + b
  }

  // now i am going to user objeect 
  const userobj ={
    name: "jitesh thakur", 
    email: "aller@gmail.com",
    age: 23
  }
// using array in 
const arr = ['sam', 'allen', 'gorilla']

// how to use any variable
let path = "data:image/png;base64,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 "




  return (
    <div>
      {/* component name */}
      <Learning />
      <Learning2 />

      {/* component name */}

    {/* ========================================= */}

      {/* if name is not present then is show user not found */}
      {/* <h1> {name?name:"user not found"}</h1>
      <h1>{x+y}</h1> */}
      
      {/* how to use fucntin here */}
      {/* <h1> the fruit inside the fruit function is : {fruit()}</h1>
      <h1>the sum of two number is : {sum(3,4)} </h1> */}

      {/* now to print the object */}
      {/* <h1> {userobj.email} </h1> */}

      {/* array */}
      {/* <h1> the name of the user is : {arr[1]} </h1> */}
    {/*using that variable   */}
    {/* <img src= {path}/> */}

    {/* =============================================== */}
    </div>
  )
}

export default App
