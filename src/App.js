import React,{useEffect,useState} from "react";
import "./App.css";
function App(){
  const [message,setMessage] = useState([]);
  
  useEffect(()=>{
    fetch("http://localhost:8000/message")
    .then((res)=> res.json())
    .then((data)=>setMessage(data.message));
  },[]);

  return (
    <div className="App">
    <h1>The message from the server : {message}</h1>
    </div>
  )
}

export default App;