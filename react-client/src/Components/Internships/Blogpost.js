import React, {useState} from 'react';
// import "./Internship.css";

const Blogslist = [
    {   id:1,
        title:" I m gonna tear you apart",
        text: " I m just trying to mess with u so that i can get u mad so that u can react in an uncivilised manner",
        author: " Nikhil sharma"
    },
    {   id:2,
        title:" I m gonna eat you in full",
        text: " I m just trying to party with u so that i can make u happy so that u can react in a civilised manner",
        author: " Akshay Bakshi"
    },
    {   id:3,
        title:" I m gonna let you fart",
        text: " I m just trying to mess with u so that i can get u so mad that u r just irritated of me",
        author: " Prasad Thakare"
    },
    {   id:4,
        title:" Hi sweetheart, this is me",
        text: " Put your sweet lips a little closer to the phone , and pretend that we r all alone....",
        author: " Purvank Bhiwgade"
    }




]
const Blogpost = () => {

    const [ blogs, setblogs ] = useState(Blogslist)
    // const [ newblog, updateNewblog ] = useState()
    // const handleChange = (e) => {
    //     updateNewblog(e.target.value)
    // }
    // const handleClick = (e) => {
    //     e.preventDefault()
    //     console.log(e.target)
    //     setblogs([
    //         {
    //             title: "nayi bakchodi",
    //             text: newblog,
    //             author: "naya banda"
    //         },
    //         ...blogs,
    //     ])
        console.log(blogs)
   

    return (
        <>
        { blogs.map(singleblog =>(
            <div className="card mb-4">
            <div className="card-body">
                <h2 className="card-title">{singleblog.title}</h2>
                <p className="card-text">{singleblog.text}</p>
                <a className="btn btn-primary" href={"/singlepost/"+ singleblog.id }>Read More →</a>
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
