import './App.css'
import Todo from './Todo'

function App() {

  return (
    <>
      <Todo learn="React" isDo={true}></Todo>
      <Todo learn="JavaScript" isDo={false}></Todo>
      <Todo learn="Html and Css" isDo={true}></Todo>
      <Device name="laptop" price="30000"></Device>
      <Device name="mobile" price= "15000"></Device>
      <Person name="towfique" age="27"></Person> 
      <Person name="likhon" age="26"></Person> 
      <Developer></Developer>
    </>
  )
}

function Person({name,age}){

  return (
    <div className='student'>
      <h1>My Name is : {name}</h1>
      <h2>I am {age} years old</h2>
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


function Device(props){
  return(
    <div>
      <h2>This Device: {props.name} and Price: {props.price}</h2>
    </div>
  )
}

export default App
