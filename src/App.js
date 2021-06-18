import React, { useState } from "react";
import ToDolists from "./ToDolists";

const App=()=>{

  const [inputList, setInputList] = useState("");
  const [Items,setItems]= useState([]);
  const itemEvent =(event)=>{
    setInputList(event.target.value);
  };
  const listOfItems=()=>{
    setItems((oldItems)=>{
      return [...oldItems,inputList];
    })
    setInputList("");
  };
  const Itemdelete=(id)=>{
    console.log("delete");
    setItems((oldItems)=>{
     return oldItems.filter((arrElem,index)=>{
     return index!==id;
     })
    })
}

  return(
  <>
    <div className="main_div">
      <div className="centre_div">
      <br />
      <h1> ToDo List</h1>
      <br />
      <input type="text" placeholder="Add notes.." 
      value={inputList}
      onChange={itemEvent}/>
      <button onClick={listOfItems}> + </button>

      <ol>
        {Items.map( (itemval,index)=>{
          return <ToDolists 
          key={index} 
          id={index} 
          text= {itemval} 
          onSelect={Itemdelete}/>
        })
      }
      </ol>
      </div>
    </div>
  </>
);
};

export default App;
