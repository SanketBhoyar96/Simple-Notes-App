import React,{useState} from "react";
import {ref} from "./App"
import"./App.css"

function FbEdit({dev,seteditbox}){

    const[name,setname]=useState("")
    const[skill,setskill]=useState("")

    function editDoc(UpdateDoc){
         ref.doc(UpdateDoc.id).update(UpdateDoc)
         .catch((err)=>{
            alert(err)
            console.error(err);
         })
    }
    const heading={
        color:'Purple',
        margin:"10px"

    }
    const create={
        color:'white',
        background:"green",
        cursor: 'pointer'
        
    }
    return(
        <div>
        <p>edit box</p>
        <input style={heading} type="text" placeholder="Name" onChange={(e)=>setname(e.target.value)} />
        <input style={heading} type="text" placeholder="Skill" onChange={(e)=>setskill(e.target.value)} />
        <button style={create} onClick={()=>{
            editDoc({name:name,skill:skill,id:dev.id})
            seteditbox(false)}}>Update</button>
        </div>
    )
}
export default FbEdit