import React, { useContext } from "react";
import { QueryRenderer } from "react-relay";
import environment from "../../relay/relay-environment";
import { popularMoviesQuery } from "../../data/popularMovies";
import styles from "./Browse.module.css";
import MovieCard from "../MovieCard/MovieCard";
import {
  searchContext,
  SearchContextProvider,
} from "../../context/Search/Search";
import { searchMoviesQuery } from "../../data/searchMovies";
import Head from 'next/head'

export default function Browse(props) {
  {
    const { searchText } = searchContext();

    let heading = "Browse Movies";
    let operation = popularMoviesQuery;
    let variables = {};
    let responseKey = "PopularMovies";
    if (searchText) {
      operation = searchMoviesQuery;
      responseKey = "SearchMovies";
      variables = {
        title: encodeURI(searchText),
      };
    }
    return (
      <div>
        <Head>
        <title>Browse Movies</title>
      </Head>
        <div className={styles.heading}>
          <h1>{heading}</h1>
        </div>
        <QueryRenderer
          environment={environment}
          query={operation}
          variables={variables}
          render={({ error, props }) => {
            if (error) {
              return <div>Error!</div>;
            }
            if (!props) {
              return <div>Loading...</div>;
            }
            return (
              <div className={styles.movieCardContainer}>
                {props[responseKey].results.map((movie) => (
                  <MovieCard key={"browse-" + movie.id} movie={movie} />
                ))}
              </div>
            );
          }}
        />
      </div>
    );
  }
}
