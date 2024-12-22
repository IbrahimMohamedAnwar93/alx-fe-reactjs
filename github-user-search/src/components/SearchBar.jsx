const SearchBar = ({ onSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search GitHub user..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
