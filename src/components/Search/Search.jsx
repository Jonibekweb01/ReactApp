import "../Search/search.css";

const Search = () => {
  return (
    <form className="search__form" method="post">
      <input
        className="search__input"
        type="text"
        name="Country: "
        aria-label="Input"
        placeholder="Search for a country…"
      />
    </form>
  );
};

export default Search;
