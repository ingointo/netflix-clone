import React, { useEffect, useState } from "react";
import { API_KEY, imgUrl } from "../../Constants/constants";
import axios from "../../axios";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState(); //we can also use this useState('') insert empty string also without using ? operator
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data.results[1]);
        setMovie(response.data.results[2]);
      });
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${movie ? imgUrl + movie.backdrop_path : ""})`,
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">{movie ? movie.title : ""}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">{movie ? movie.overview : ""} </h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
