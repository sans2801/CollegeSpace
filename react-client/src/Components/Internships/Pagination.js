import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import "./Pagination.css";

const Pagination = ({ data }) => {
    // const [pages] = useState(Math.round(data.length / dataLimit));
    // const [currentPage, setCurrentPage] = useState(1);

    function goToNextPage() {
        // setCurrentPage((pages) => pages + 1);
    }

    function goToPreviousPage() {
        // setCurrentPage((pages) => pages - 1);
    }
    return (
        <div>
            <ul className="pagination justify-content-center mb-4">
                <li className="page-item"><Button variant="contained" className="page-link" onClick={goToPreviousPage}>← Older</Button></li>
                <li className="page-item"><Button variant="contained" className="page-link" onClick={goToNextPage}>Newer →</Button></li>
            </ul>
        </div>
    )
}

export default Pagination
