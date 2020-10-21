import React from "react";

// this is a functional component
const Pagination = (props) => {
    const pageLinks = []

    for (let i = 1; i <= props.pages + 1; i++) {
        let active = props.currentPage === i ? "active" : "";

        pageLinks.push(<li className={`page-item ${active}`} key={i} onClick={() => props.nextPage(i)}><a className="page-link" href="#">{i}</a></li>)
    }
    return (
        <nav aria-label="Page navigation example">
            <ul class="pagination">

                {props.currentPage > 1 ? <li className={`page-item disabled`} onClick={() => props.nextPage(props.currentPage - 1)}><a className="page-link" href="#">Prev</a></li> : ""}

                {pageLinks}

                {props.currentPage < props.pages + 1 ? <li className={`page-item`} onClick={() => props.nextPage(props.currentPage + 1)}><a className="page-link" href="#">Next</a></li> : ""}
            </ul>
        </nav>



    )
}

export default Pagination;