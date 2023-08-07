export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <p>{title}</p>
        </li>
      ))}
    </ul>
  );
};
