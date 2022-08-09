import React from "react";
import { useState } from "react";
import {ref} from './App';
import FbEdit from "./FbEdit";
import"./App.css"

function DataBlock({dev}){
    const[editbox,seteditbox]=useState(false);



    function deleteDoc(docx){
          ref
          .doc(docx.id)
          .delete()
          .catch((err)=>{
            alert(err)
            console.error(err);
          })
    }
    const heading={
        color:'white',
        cursor: "pointer",
        background:"red",
    }

    const create={
        color:'white',
        background:"green",
        cursor: 'pointer'
        
    }
    return(
       <div key={dev.id}>
            <h1 >Name:{dev.name}</h1>
            <p>skill:{dev.skill}</p>
            <button style={heading} onClick={()=>deleteDoc(dev)}>Delete</button>
            <button style={create} onClick={()=>seteditbox(true)}>Edit</button>
            {editbox === true && <FbEdit dev={dev} seteditbox={seteditbox}/>}
        </div>
    )
}
export default DataBlock