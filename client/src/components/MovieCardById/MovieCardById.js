import { React, useContext, useEffect, useState } from "react";
import { fetchQuery } from "react-relay";
import { movieDetailsQuery } from "../../data/movieDetails";
import environment from "../../relay/relay-environment";
import MovieCard from "../MovieCard/MovieCard";

export default function MovieCardById(props) {
  const [movieData, setMovieData] = useState();
  useEffect(async () => {
    const movie = await fetchQuery(environment, movieDetailsQuery, {
      movieId: props.movieId,
    });
    setMovieData(movie.MovieDetail);
  }, []);

  return <div>{movieData && <MovieCard movie={movieData} />}</div>;
}
