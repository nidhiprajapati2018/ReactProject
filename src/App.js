import React, {useState} from 'react';
import Tweet from "./Tweet"; 



function App(){
    const[users, setUsers] = useState([
      {name:"TajMahal", message:"New Delhi"},
      {name:"Ajanta Ellora", message:" Maharashtra"},
      {name:"Shimala", message:"New Delhi"},
      {name: "Mysore",message:"Karnataka"}
    ])

  
  return(
    <div className="app">
     {users.map(user =>(
       <Tweet name={user.name} message={user.message}/>
     ) )}
 
   
    </div>
  )
}

export default App;