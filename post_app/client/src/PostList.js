import { useState, useEffect } from "react";
import axios from 'axios';


export default () => {

    const [posts, setPosts ] = useState({});

    const fetchPosts = async () => {
        const res = await axios.get('https://legendary-train-vwpp5rgj99jhj6g-4000.app.github.dev/posts');
        setPosts(res.data);
    }

    useEffect(()=>{
       fetchPosts();
    },[]);

    const renderedPosts = Object.values(posts).map(post => {
        return <div className="card" style={{width: '30%', marginBottom: '20px'}} key={post.id}>
            <div className="card-body">
              <h3>{post.title}</h3>
            </div>
        </div>
    })

    return <div className="d-flex flex-row flex-wrap justify-content-between">{renderedPosts}</div>
}