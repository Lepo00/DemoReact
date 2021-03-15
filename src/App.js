import React, { useState } from 'react'
import './App.scss';
import Post from './Post';
import Counter from './Counter';

function App() {
    const [posts, setPosts]= useState([
        {author:"Mario", desc:"desc1"},
        {author:"Luigi", desc:"desc2"},
        {author:"Yoshi", desc:"desc3"},
        {author:"Peach", desc:"desc4"},
        {author:"Toad", desc:"desc5"},
        {author:"Donkey Kong", desc:"desc6"}
    ])
    return (
        <div>
            <h1>Hello world</h1>
            <div className="row">
               {posts.map((post, index)=>(
                   <Post key={index} author={post.author} desc={post.desc}/>
               ))}
            </div>
            <Counter/>
        </div> 
    );
}

export default App;