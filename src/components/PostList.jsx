

import classes from './PostList.module.css';

import Post from './Post';
import NewPost from './NewPost';

export default function PostList()  {
  return (
    <>

    <NewPost />
    <ul className={classes.posts} >
      < Post author="Outputting Dynamic Values" text="Check out how I'm learning all fundaments in React.JS" link="/dynamic-values" /> 

    < Post author="Reusing Components" text="Check out how I'm learning all fundaments in React.JS" link="/reusing-components" />
    </ul>
    </>
  )
}
