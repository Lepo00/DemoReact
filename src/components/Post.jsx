import React, { useEffect, useState } from 'react';


function Post(props) {
    const [post, setPost] = useState({});

    useEffect(() =>{
        fetchPost();
    }, []);

    const fetchPost = async()=>{
        const id= props.match.params.id;
        const post = await (await fetch('https://jsonplaceholder.typicode.com/posts/'+id)).json();
        setPost(post);
    }

    return (
        <div>
            <h1>Post {post.id}</h1>
            <h2>{post.title}</h2>
            <h4>{post.body}</h4>
        </div>
    )
}

export default Post;
