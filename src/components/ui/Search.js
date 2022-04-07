import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [searchField, setSearchField] = useState("");

  const onSearchChange = (q) => {
    setSearchField(q);
    getQuery(q);
  };
  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search Characters"
          value={searchField}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </form>
    </section>
  );
};

export default Search;
