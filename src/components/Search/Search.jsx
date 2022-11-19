import { useEffect, useRef, useState } from "react";
import "../Search/search.css";

const Search = ({ setValue }) => {
  return (
    <form className="search__form">
      <input
        onKeyUp={(evt) => {
          if (evt.code === "Enter") {
            setValue(evt.target.value);
            evt.target.value = "";
          }
        }}
        className="search__input"
        type="search"
        name="Country: "
        aria-label="Input"
        placeholder="Search for a country…"
      />
    </form>
  );
};

export default Search;
