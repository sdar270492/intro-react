function SearchBar({search, doSearch}) {
    return (
        <div>
            <input 
            value={search}
            onChange={(event)=> {
                doSearch(event.target.value);
            }}
            className="form-control mb-3" 
            placeholder="Search"/>
        </div>
    );
}

export default SearchBar;