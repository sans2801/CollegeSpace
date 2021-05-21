import { Button } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import "./Pagination.css";
import {
    Link,
} from "react-router-dom";
import axios from "axios";


const Pagination = ({ data }) => {
    const dataLimit = 2;
    const [blogs, setblogs] = useState([]);
    const [pending, setPending] = useState(true);
    const [pages, setPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);


    useEffect(() => {
        axios.get("http://localhost:3001/users/getblogs").then((response) => {
            setblogs(response.data);
            setPending(false);
        }).catch((err) => {
            console.log(err.message);
        });

    }, []);

    useEffect(() => {
        setPages(Math.round(blogs.length / dataLimit))
    }, [blogs])

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return blogs.slice(startIndex, endIndex);
    };

    const goToNextPage = () => {
        setCurrentPage((page) => page + 1);
    }

    const goToPreviousPage = () => {
        setCurrentPage((page) => page - 1);
    }

    return (
        <div>
            <div className="dataContainer">
                {pending && <div>Fetching blogs...</div>}
                {blogs != null && getPaginatedData().map((singleblog, idx) => (
                    <div className="card mb-4" key={idx}>
                        <div className="card-body">
                            <h2 className="card-title">{singleblog.title}</h2>
                            <p className="card-text">{`${singleblog.text.slice(0, 200)}...`}</p>
                            <Link className="btn btn-primary" to={{
                                pathname: `/singlepost/${singleblog.id}`,
                                blog: singleblog,
                            }}>Read More →
                            </Link>
                        </div>
                        <div className="card-footer text-muted">
                            {`Posted on January 1, 2021 by  ${singleblog.author}`}
                        </div>
                    </div>
                ))}
            </div>
            <ul className="pagination justify-content-center mb-4">
                <li className="page-item">
                    <Button
                        variant="contained"
                        className="page-link"
                        onClick={goToPreviousPage}
                        disabled={currentPage === 1 ? true : false}
                    >
                        ← Older
                    </Button>
                </li>
                <li className="page-item">
                    <Button
                        variant="contained"
                        className="page-link"
                        onClick={goToNextPage}
                        disabled={currentPage === pages ? true : false}
                    >
                        Newer →
                    </Button>
                </li>
            </ul>
        </div>
    )
}

export default Pagination
