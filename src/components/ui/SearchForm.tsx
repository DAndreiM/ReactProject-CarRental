import classes from "./SearchForm.module.css";

const SearchForm: React.FC<{
  searchHandler: (e?: any) => void;
  searchInputChangeHandler: (e?: any) => void;
  searchData?: string;
}> = ({ searchHandler, searchInputChangeHandler, searchData }) => {
  return (
    <form className={classes.searchForm} onSubmit={searchHandler}>
      <input
        onChange={searchInputChangeHandler}
        type="text"
        placeholder="Search..."
        value={searchData ? searchData : undefined}
      />
      <button type="submit">
        <img src="https://img.icons8.com/material-rounded/24/null/search.png" />
      </button>
    </form>
  );
};

export default SearchForm;
