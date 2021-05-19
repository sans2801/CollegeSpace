import React, { useState, useEffect } from 'react';
import axios from "axios";
// import "./Internship.css";
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route,
    Redirect,
} from "react-router-dom";

const Blogpost = () => {

    const [blogs, setblogs] = useState(null);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        axios.get("http://localhost:3001/users/getblogs").then((response) => {
            setblogs(response.data);
            console.log(blogs);
            setPending(false);
        }).catch((err)=>{
          console.log(err.message);  
        });
    }, []);

    console.log(blogs)
    return (
        <>
            {pending && <div>Fetching blogs...</div>}

            {blogs!=null && blogs.map(singleblog => (
                <div className="card mb-4">
                    <div className="card-body">
                        <h2 className="card-title">{singleblog.title}</h2>
                        <p className="card-text">{singleblog.text}</p>
                        <Link className="btn btn-primary" to={{
                            pathname: `/singlepost/${singleblog.id}`,
                            blog: singleblog,
                        }}>Read More →
                </Link>
                    </div>
                    <div className="card-footer text-muted">
                        Posted on January 1, 2021 by
                            {singleblog.author}
                    </div>
                </div>
            ))}
        </>

    )
}

export default Blogpost
