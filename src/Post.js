import React, { useState } from 'react';
import './App.scss';

function Post(props){
    const [count, setCount]=useState(0);
    const increment=()=>{
        setCount(count+1);
    }
    return(
        <div className="post">
            <h2>{props.author}</h2>
            <h4>{props.desc}</h4>
            <button onClick={increment}>Like</button> {count}
        </div>
    )
}

export default Post;