import React from 'react'

const Learning2 = () => {

  function fruit(){
    alert("apple is a fruit")
  }

  // now i am using arrow funtion 
  const username = (name) => {
    alert("Hello " + name);
  }


  return (
    <div>
     
     <button onClick={fruit}> click me 1</button>
     <br /><br />
 <button onClick={() => username("Jitesh")}>
      Click me 2
    </button>
    </div>
  )
}

export default Learning2