import React from "react";
// import { useEffect } from "react";
import { useState } from "react";
import {ref} from './App';
import {v4 as uuidv4} from "uuid";
import"./App.css"

function FbCreate(){

    const[name,setname]=useState("")
    const[skill,setskill]=useState("")

  function createDoc(newDataObj){
         console.log('Right');
         ref
        //  .doc()
        .doc(newDataObj.id)
         .set(newDataObj)
         .catch((err)=>{
            alert(err)
            console.error(err);
         })
  }
  const heading={
    color:'black',

 
}
  const create={
    color:'white',
    background:"green",
    cursor: "pointer"
    
}
    return(
        <div>
        <input style={heading} type="text" id="name1" placeholder="Name"  onChange={(e)=>{setname(e.target.value) }}/>
        <input style={heading} type="text" id="skill1" placeholder="skill" onChange={(e)=>{setskill(e.target.value) }}/>
        <button style={create} onClick={()=>{
            createDoc({name,skill,id:uuidv4()})
            document.getElementById("name1").value = ""
            document.getElementById("skill1").value = ""
        }}>Create Notes</button>
        </div>
    )
}
export default FbCreate