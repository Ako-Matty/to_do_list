
import { useState } from 'react';
import './App.css';

const  App = () => {
  const [inputtext, setinputtext] = useState("");
  const [items, setItems] = useState([]);

  const[toggle, setToggle] = useState(false);

 
  const AddItem = () => {
console.log(items)
    
    let listCopy = [...items];
    


    listCopy.push(inputtext)
    setItems(listCopy);

  }
  
// Delete items

const DeleteItem = (selectedIndex) => {

let listCopy = [...items];

listCopy.splice(selectedIndex, 1);

setItems( listCopy)

}

const Crossitem = inputtext => {
  console.log(Crossitem)

  setToggle(!toggle)

  let listCopy = [...items];

  console.log(inputtext.target.parentElement)

  if (inputtext.target.parentElement.style.textDecoration === "line-through") {
    inputtext.target.parentElement.style.setProperty(`text-decoration`, "none");


    
  } else {
    inputtext.target.parentElement.style.setProperty('text-decoration', 'line-through');
  }

}





  return (

// Current list for editing
    
    <div className="App">
    
    <div>
      <h1 className='Title'>My list to do</h1>
      </div>

   <div className='Addinglist'>   
   

   <input id='box' type="text" placeholder='Add to list' value={inputtext} onChange={ (event)=> setinputtext(event.target.value)} ></input>

   <button id='Plus' onClick={AddItem}>Add list</button>
   
   

<div className='texts'>{items.map( (item, index) => {
return <div id='colourbox'> <h4 key={index} id="checkedlist"> {item} 
 <button id='ticked' onClick = {Crossitem}>Complete</button> <button id='Minus' onClick = {() => DeleteItem(index)}>X</button> </h4> </div>

})}</div>

   </div>
    </div>


  )







}

export default App;
