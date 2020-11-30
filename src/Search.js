import "./Search.css";
import React from 'react'

const Search = (props) => {

    function handleSearch(e) {
        console.log(e.target.value);
        props.setQuery(e.target.value);
    }

    return (
        <div className="Search">
            <form><input type="text" placeholder="Search by character name..." onChange={(e) => { handleSearch(e) }} /></form>
        </div>
    )
}

export default Search
