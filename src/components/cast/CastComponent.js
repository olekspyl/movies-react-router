export const CastComponent = ({ cast }) => {
  return (
    <ul>
      {cast.map(({ name, profile_path, id }) => {
        const src = `https://www.themoviedb.org/t/p/w138_and_h175_face/${profile_path}`;
        return (
          <li key={id}>
            <img src={src} alt={name}></img>
            <p>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};
