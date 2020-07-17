import React, { Fragment, useState, useEffect } from "react";
import axio from "../../Services/axios";
import "./Home.css";

const imageBaseUrl = "https://image.tmdb.org/t/p/original/";

function Home({ title, fetchUrl, isLargeImage }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const requestReponse = await axio.get(fetchUrl);
      setMovies(requestReponse.data.results);
      return requestReponse;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <Fragment>
      <div className="netflix__row">
        <h2>{title}</h2>
        <div className="netflix__poster">
          {movies.map((movie) => (
            <img
              key={movie.id}
              src={`${imageBaseUrl}${
                isLargeImage ? movie?.poster_path : movie.backdrop_path
              }`}
              alt={movie?.name}
              className={`netflix__poster__image ${
                isLargeImage ? "netflix__poster__image-large" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
