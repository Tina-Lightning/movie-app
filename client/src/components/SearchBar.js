import React from 'react';

const SearchBar = (props) => {
    return (
        <div className="container">
            <div className="row">
                <section className="col s12">
                    <form action="" onSubmit={props.handleSubmit}>
                        <div className="input-field">
                            <input placeholder="Search for Movie" type="text" onChange={props.handleChange} />
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default SearchBar;
