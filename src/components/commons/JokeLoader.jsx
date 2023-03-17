import "../../styles/JokeLoader.css";
function JokeLoader() {
  return (
    <div className="joke-loader loader">
      <div className="joke-loader ball bg-primary"></div>
      <div className="joke-loader ball bg-primary"></div>
      <div className="joke-loader ball bg-primary"></div>
    </div>
  );
}

export default JokeLoader;
