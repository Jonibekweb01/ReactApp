import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "../Search/search.css";

const Search = ({ setValue }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <form className={theme}>
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
