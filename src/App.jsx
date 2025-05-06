import './App.css'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <Device></Device>
      <Person></Person> 
      <Person></Person> 
      <Developer></Developer>
    </>
  )
}

function Person(){
  const age= 27;
  return (
    <div className='student'>
      <h1>My Name Is towfique and I am {age} years old</h1>
    </div>
  
  )
}

function Developer(){
  const developerStyle = {
    margin:"20px",
    padding: "20px",
    border: "2px solid purple",
    borderRadius:"10px"
  }
  return(
    <div style={developerStyle}>
      <h5>Devo Devo</h5>
      <p>Coding: </p>
    </div>
  )
}


function Device(){
  return(
    <div>
      <h2>This Device: laptop </h2>
    </div>
  )
}

export default App
