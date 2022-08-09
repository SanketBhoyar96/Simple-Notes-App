
import './App.css';
import {useState,useEffect} from 'react';
import firebase from"./Firebase";
import DataBlock from './DataBlock';
import FbCreate from './FbCreate';
// import FbEdit from './FbEdit';

const ref = firebase.firestore().collection("developers")
function App() {
  // console.log(ref);

  const [data,setdata]=useState([])
  const [loader,setloader]=useState(true)

  // function getData(){
  //   ref.onSnapshot((querySnapshot) =>{
  //          const items= []
  //          querySnapshot.forEach((doc)=>{
  //            items.push(doc.data())
  //          })
  //          setdata(items)
  //          setloader(false)
  //   })
  // }

  function getData2(){
    ref.get().then((item)=>{
      const items = item.docs.map((doc)=>doc.data())
      setdata(items)
      setloader(false)
    })
  }

  useEffect(()=>{
      // getData()
      getData2();
      // console.log(data);
  },[])
  const heading={
    color:'Brown',
 
}

  return (
    <div className="App">
    <h1 style={heading}>Simple Notes App</h1>
    {loader === false && (data.map((dev)=>(
        // <div key={dev.id}>
        //     <h1>Name:{dev.name}</h1>
        //     <p>skill:{dev.skill}</p>
        // </div>
        <DataBlock dev={dev}/>
    )))}

    <FbCreate />
    </div>
  );
}
export{ref}
export default App;
