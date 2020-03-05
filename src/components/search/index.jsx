import React from "react";
import "./Search.scss";

const Search = ({ onChange, placeholder, type }) => {
  return (
    <div className="form_input">
      <input type={type} placeholder={placeholder} onChange={onChange} />
      <button>
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default Search;
