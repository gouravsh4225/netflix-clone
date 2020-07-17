import React, { useState, useEffect } from "react";
import axios from "../../Services/axios";
import requests from "../../Services/RequestUrls";
import "./Banner.css";

const imageBaseUrl = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchBannerData() {
      const requestResponse = await axios.get(requests.fetchNetflixOriginal);
      const randomMovie =
        requestResponse.data.results[
          Math.floor(Math.random() * requestResponse.data.results.length - 1)
        ];
      setMovie(randomMovie);
      return requestResponse;
    }
    fetchBannerData();
  }, []);

  function truncateString(str, n) {
    if (str) {
      return str.length > n ? str.substring(0, n - 1) + "..." : str;
    }
    return null;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${imageBaseUrl}${movie?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner-btn">Play</button>
          <button className="banner-btn">My List</button>
        </div>
        <h1 className="banner__description">
          {truncateString(movie?.overview, 100)}
        </h1>
      </div>
      <div className="banner--fadebottom"></div>
    </header>
  );
}

export default Banner;
