import React from 'react'
import './SearchForm.css';

function SearchForm(props) {

    function handleKeywordChange(e) {
        props.setKeyword(e.target.value);
    }

    function handleSearchSubmit(e) {
        e.preventDefault();
        props.onKeywordSubmit(props.keyword)
    }

    return (
            <section className="header__search">
                <h1 className="header__search-title">Enter any keyword to find a picture</h1>
                <form className="header__search-form" onSubmit={handleSearchSubmit}>
                    <input className="header__search-input" placeholder="Enter keyword" type='text' name='keyword' required value={props.keyword} onChange={handleKeywordChange}/>
                    <button type="submit" className="header__search-button">Search</button>
                </form>
            </section>
       
    )
}

export default SearchForm;