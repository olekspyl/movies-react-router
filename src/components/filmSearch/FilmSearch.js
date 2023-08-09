export const FilmSearch = ({
  handleChange,
  handleClick,
  handleSubmit,
  query,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange}></input>
        <button type="button" onClick={handleClick}>
          Search
        </button>
      </form>
    </div>
  );
};
