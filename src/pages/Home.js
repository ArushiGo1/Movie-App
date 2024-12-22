import Header from '../components/Header';
// import "../App.css";
export default function Home(){
  return (
    
    <div className="app dark-bg">
      {/* Navbar */}
      <Header/>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero__content">
          <h1 className="hero__title">Movie Title</h1>
          <div className="hero__buttons">
            <button className="hero__button">Play</button>
            <button className="hero__button">My List</button>
          </div>
          <p className="hero__description">This is a brief description of the movie.</p>
        </div>
      </header>

      {/* Rows of Movies */}
      <div className="rows">
        {/* Row Component */}
        <div className="row">
          <h2 className="row__title">Trending Now</h2>
          <div className="row__posters">
            {/* Example Posters */}
            <img
              className="row__poster"
              src="https://image.tmdb.org/t/p/w500/example-poster.jpg"
              alt="Movie Poster"
            />
            <img
              className="row__poster"
              src="https://image.tmdb.org/t/p/w500/example-poster.jpg"
              alt="Movie Poster"
            />
            <img
              className="row__poster"
              src="https://image.tmdb.org/t/p/w500/example-poster.jpg"
              alt="Movie Poster"
            />
          </div>
        </div>
        {/* Additional rows can be added similarly */}
      </div>
    </div>
  );
};