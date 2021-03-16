import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.scss';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const data = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
        const posts = data.slice(0, 10);
        setPosts(posts);
    }

    return (
        <div className="app">
            <h1>Home</h1>
            {posts.map(post => (
                <Link to={'/post/'+post.id} key={post.id}>
                    <h4>{post.title}</h4>
                </Link>
            ))}
        </div>
    )
}
export default Home;