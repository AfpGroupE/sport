import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="">
      <input
        className=""
        type="search"
        placeholder="user keresés..."
        onChange={searchChange}
      />
    </div>
  );
};
export default SearchBox;
