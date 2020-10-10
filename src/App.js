import React, {useState} from 'react';
import './App.css';
import Header from './Componets/Header'

function App() {
  const [counter,setCounter]=useState(0); 
  const [isAddMode,setIsAddMode]=useState(false); 


  function handleClick(event){

    setCounter(counter+1)
    event.preventDefault();
  }

  function handleDecrement(event){

    setCounter(counter-1)
    event.preventDefault();
  }
  function handleBack(event){

    setIsAddMode(false)
    event.preventDefault();
  }
  function handleAdd(event){

    setIsAddMode(!isAddMode)
    event.preventDefault();
  }

  return (
    <div className="App">
    <Header isAddMode={isAddMode} onBackPress={handleBack} handleAdd={handleAdd}/>
    {isAddMode?<div>Add Todo Form</div>:<div>Todo List</div>}
    </div>
  );
}
export default App;



