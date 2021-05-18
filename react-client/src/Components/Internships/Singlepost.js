import React, { useState } from 'react'
// import "./Internship.css";
import { Typography, Container, makeStyles } from "@material-ui/core";
import Comment from './Comment';

const useStyles = makeStyles((theme) => ({
    root: {
        color: "white",
        textAlign: "left",
        ".forms > input textarea": {
            background: "red"
        }
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


const Singlepost = () => {
    const [ comments, setComments ] = useState(CommentList)
    const [ newComment, updateNewComment ] = useState()

    const handleChange = (e) => {
        updateNewComment(e.target.value)
    }
    
    const handleClick = (e) => {
        e.preventDefault()
        console.log(e.target)
        setComments([
            {
                name: "Naya aadmi",
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
            <Typography variant="h2">Post Title</Typography>
            <Typography variant="h5">
                by
                <a href="#!">Start Bootstrap</a>
            </Typography>
            <hr />
            <Typography variant="h5">
                Posted on January 1, 2021 at 12:00 PM
            </Typography>
            <hr />
                            Start Bootstrap
            <Typography variant="h5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore?</Typography>
            <Typography variant="h5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.</Typography>
            <Typography variant="h5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!</Typography>
            <blockquote className="blockquote">
                <Typography variant="h5" className="mb-0">kya bola?</Typography>
                <footer className="blockquote-footer">
                    Someone famous in
                    <cite title="Source Title">Source Title</cite>
                </footer>
            </blockquote>
            <Typography variant="h5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?</Typography>
            <Typography variant="h5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!</Typography>
            <hr />
            <hr />
             <div className="card my-4">
                <h5 className="card-header">Leave a Comment:</h5>
                <div className="card-body">
                    <form>
                        <div className="form-group"><textarea className="form-control" rows="3" value={newComment} onChange={handleChange}></textarea></div>
                        <button className="btn btn-primary" type="submit" onClick={handleClick}>Submit</button>
                    </form>
                </div>
            </div>
            {/* -----------------------Comments-------------------------- */}
            {comments.map(singleComment => (
                <Comment
                    name={singleComment.name}
                    text={singleComment.text}
                    time={singleComment.time}
                /> 
            ))}
               
        </Container> 
    )
}

export default Singlepost
