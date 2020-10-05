import React from "react";

// this is a functional component
const Pagination = (props) => {
    const pageLinks = []

    for (let i = 1; i <= props.pages + 1; i++) {
        let active = props.currentPage === i ? "active" : "";

        pageLinks.push(<li className={`waves-effect ${active}`} key={i} onClick={() => props.nextPage(i)}><a href="#">{i}</a></li>)
    }
    return (
        <div className="container">
            <div className="row">
                <ul class="pagination">

                    {props.currentPage > 1 ? <li className={`waves-effect`} onClick={() => props.nextPage(props.currentPage - 1)}><a href="#">Prev</a></li> : ""}

                    {pageLinks}
                </ul>
            </div>
        </div>
    )
}

export default Pagination;