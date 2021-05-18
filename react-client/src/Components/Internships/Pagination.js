import React from 'react';
import "./Pagination.css";

const Pagination = () => {
    return (
        <div>
            <ul className="pagination justify-content-center mb-4">
                <li className="page-item"><a class="page-link" href="#!">← Older</a></li>
                <li className="page-item"><a class="page-link" href="#!">Newer →</a></li>
            </ul>
        </div>
    )
}

export default Pagination
