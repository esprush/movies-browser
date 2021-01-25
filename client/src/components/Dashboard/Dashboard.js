import { React, useContext, useEffect } from "react";
import Head from 'next/head'
import { useUserMovieDataContext } from "../../context/UserMovieData/UserMovieData";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./Dashboard.module.css";
export default function Dashboard(props) {
  const { userMovieData } = useUserMovieDataContext();

  let heading = "Your Favourite Movies";

  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className={styles.heading}>
          <h1>{heading}</h1>
        </div>
      <div className={styles.movieCardContainer}>
        {userMovieData &&
          Object.keys(userMovieData).map((movieId) => (
            <MovieCard
              key={"dashboard-" + movieId}
              movie={userMovieData[movieId]["movieData"]}
            />
          ))}
      </div>
    </div>
  );
}
