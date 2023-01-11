import "./Search.css";

function Search({ query, inputHandler, searchInput }) {
  return (
    <div>
      <input
        className="input-text"
        type="text"
        placeholder="Search city..."
        value={query}
        onChange={inputHandler}
      ></input>
      <button className="search-btn" onClick={searchInput}>Search</button>
    </div>
  );
}

export default Search;
