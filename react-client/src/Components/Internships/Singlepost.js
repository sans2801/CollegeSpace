import React, { useState, useEffect } from 'react'
// import "./Internship.css";
import { Typography, Container, makeStyles, Box } from "@material-ui/core";
import { useParams, useLocation } from "react-router-dom";
import Comment from './Comment';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
        color: "white",
        textAlign: "left",
        ".forms > input textarea": {
            background: "red"
        }
    },
    title: {
        color: "#0099ff",
        textAlign: "centre",
        font: "poppins",
    },
    author: {
        color: "#99ccff",
        textAlign: "centre",
    },
}))

const CommentList = [
    {
        name: "Rebel",
        text: "Thank you for this blog",
        time: Date()
    },
    {
        name: "Rebel",
        text: "Thank you for this blog",
        time: Date()
    },
    {
        name: "Rebel",
        text: "Thank you for this blog",
        time: Date()
    },
    {
        name: "Rebel",
        text: "Thank you for this blog",
        time: Date()
    },
]


const Singlepost = (props) => {
    const [comments, setComments] = useState(CommentList);
    const [newComment, updateNewComment] = useState();
    const [pending, setPending] = useState(true);
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3001/users/getblog/${id}`).then((response) => {
            setBlog(response.data);
            setPending(false);
        }).catch((err) => {
            console.log(err.message);
            setError(err.message);
        });
    }, [])

    const handleChange = (e) => {
        updateNewComment(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault()
        console.log(e.target)
        setComments([
            {
                name: "New User",
                text: newComment,
                time: Date()
            },
            ...comments,
        ])
        console.log(comments)
    }
    const classes = useStyles()
    return (
        // <Container>
        <Container className={classes.root}>


            {pending && <h3>Fetching blog...</h3>}

            {blog &&

                <div>

                    <Box className={classes.title} my={1}><Typography variant="h2">{blog.title}</Typography></Box>

                    <Box className={classes.author} my={1} ><Typography variant="h5">
                        By
                {blog.author}
                    </Typography>
                        <hr />
                        <Typography variant="h5">
                            {"Posted on  " + blog.time}
                        </Typography></Box>
                    <hr />


                    <Box mr={4} my={6}><Typography variant="h6">{blog.text}</Typography></Box>
                </div>

            }

            {error && <h3>error</h3>}

            <hr />
            <hr />
            {/* <div className="card my-4">
                <h5 className="card-header">Leave a Comment:</h5>
                <div className="card-body">
                    <form>
                        <div className="form-group"><textarea className="form-control" rows="3" value={newComment} onChange={handleChange}></textarea></div>
                        <button className="btn btn-primary" type="submit" onClick={handleClick}>Submit</button>
                    </form>
                </div>
            </div> */}
            {/* -----------------------Comments-------------------------- */}
            {/* {comments.map(singleComment => (
                <Comment
                    name={singleComment.name}
                    text={singleComment.text}
                    time={singleComment.time}
                /> 
            ))} */}

        </Container>
    )
}

export default Singlepost
