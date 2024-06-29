import React from "react";

const Header = ({ query, search, setSearch, setQuery }) => {
  return (
    <div className="header">
      <div className="logo">
        <i className="fa-solid fa-briefcase"></i>
        SearchJobs
      </div>
      <div className="searchBox">
        <input
          type="text"
          placeholder="Search any Job..."
          required
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <button
          className="btn"
          type="submit"
          onClick={() => setSearch(!search)}
        >
          Search
        </button>
      </div>
      <div className="about">About Us</div>
    </div>
  );
};
export default Header;
