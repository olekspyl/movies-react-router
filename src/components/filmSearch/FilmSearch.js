export const FilmSearch = ({ handleChange, handleSubmit, query }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={query}
          name="movie"
        ></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
