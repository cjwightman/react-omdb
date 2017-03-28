import React, { Component } from 'react';

class Search extends Component {
  render() {
    let {handleSearchInput, handleSubmitQuery, query} = this.props
    return (
      <div className="searchBox">
        <form onSubmit={(evt) => handleSubmitQuery(evt)}>
        <input
        onChange={(evt) => handleSearchInput(evt)}
        value={query}
        type="text"
        placeholder="What are you looking for?"/>
        <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
