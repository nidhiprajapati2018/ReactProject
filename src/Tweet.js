import { throwStatement } from '@babel/types';
import React from 'react'; 
import "./App.css";

//when we write props inside the curly Braces
function Tweet({name, message}){ 
    return(
       // we use props.name instead of name inside the curly braces
        <div className="tweet">
          
            <h3>{name}</h3>  
            <p>{message}</p>  
            <h1>No of Like</h1>
        </div>
       
    )
}

export default Tweet;