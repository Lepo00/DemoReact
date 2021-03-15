import React, { useState } from 'react'
import './App.scss';
import Post from './Post';
import Counter from './Counter';

function App() {
    return (
        <div>
            <h1>Hello world</h1>
            <div className="row">
                <Post author="Mario" desc="desc1"/>
                <Post author="Luigi" desc="desc2"/>
            </div>
            <div className="row">
                <Post author="Yoshi" desc="desc3"/>
                <Post author="Peach" desc="desc4"/>
                <Post author="Toad" desc="desc5"/>
                <Post author="Donkey Kong" desc="desc6"/>
            </div>
            <Counter/>
        </div> 
    );
}

export default App;