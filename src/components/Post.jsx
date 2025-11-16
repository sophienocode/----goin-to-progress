/* rafc - rfc  */ 

import React, { useState } from 'react'

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
        <p> {props.text}  </p>
        
        
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
 

