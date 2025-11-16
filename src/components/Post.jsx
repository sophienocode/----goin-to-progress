/* rafc - rfc  */ 

import React, { useState } from 'react'
import { Link } from 'react-router-dom';


/* Outputting dynamic values em React é quando você muda algum valor (state) e o React mostra isso na tela automaticamente. */

// const names =  [ 'React fundamentals', 'Fundamentals' ];

function Post(props)  {

    /* 
    const chosenName = Math.random() > 0.5 ? names[0] : names[1];

    const [nome, setNome] = useState("");
    */

  return (
    <div>
        <h1> {props.author} </h1>
        <Link to="/dynamic-values"> { props.text } </Link>
        
         
        
        
        {
        /* <input
        type='text'
        placeholder='Digite um adjetivo?'
        onChange={(e) => setNome(e.target.value)}
        />
        */}
        
    </div>
  )
}

export default Post;
 

