import React from 'react';

const SearchBar = (props) => {
    return (
        <div className="container">
            <div className="row">
            <div className="col-12">
                <form action="" onSubmit={props.handleSubmit}>
                    <div className="input-field">
                        <input class="form-control" type="text" placeholder="Search for Movie" aria-label="Search" onChange={props.handleChange} />
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;
