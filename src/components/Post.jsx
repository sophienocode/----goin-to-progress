/* rafc - rfc  */ 

import classes from './Post.module.css'; 


import { Link } from 'react-router-dom';


/* Outputting dynamic values em React é quando você muda algum valor (state) e o React mostra isso na tela automaticamente. */

// const names =  [ 'React fundamentals', 'Fundamentals' ];

function Post({author, text, link})  {

    /* 
    const chosenName = Math.random() > 0.5 ? names[0] : names[1];

    const [nome, setNome] = useState("");
    */

  return (
    <>
    <div className={classes.post}>
        <h1 className={classes.author} > {author} </h1>
        <Link to={link} className={classes.text} > { text } </Link>
        
        
         
        
        
        {
        /* <input
        type='text'
        placeholder='Digite um adjetivo?'
        onChange={(e) => setNome(e.target.value)}
        />
        */}
        
    </div>
    </>
  )
}

export default Post;
 

