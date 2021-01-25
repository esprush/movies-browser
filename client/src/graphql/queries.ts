/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const popularMovies = /* GraphQL */ `
  query PopularMovies {
    PopularMovies {
      page
      results {
        id
        original_title
        poster_path
        release_date
        overview
        title
        vote_average
        userMovieData {
          movie
          user
          favourite
          note
          createdOn
          updatedOn
        }
      }
      total_pages
      total_result
    }
  }
`;
export const getUserMovieData = /* GraphQL */ `
  query GetUserMovieData($user: ID!, $movie: String!) {
    getUserMovieData(user: $user, movie: $movie) {
      movie
      user
      favourite
      note
      movieData {
        id
        original_title
        poster_path
        release_date
        overview
        title
        vote_average
        userMovieData {
          movie
          user
          favourite
          note
          createdOn
          updatedOn
        }
      }
      createdOn
      updatedOn
    }
  }
`;
export const listUserMovieDatas = /* GraphQL */ `
  query ListUserMovieDatas(
    $user: ID
    $movie: ModelStringKeyConditionInput
    $filter: ModelUserMovieDataFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUserMovieDatas(
      user: $user
      movie: $movie
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        movie
        user
        favourite
        note
        movieData {
          id
          original_title
          poster_path
          release_date
          overview
          title
          vote_average
        }
        createdOn
        updatedOn
      }
      nextToken
    }
  }
`;
export const searchMovies = /* GraphQL */ `
  query SearchMovies($params: QuerySearchMoviesParamsInput!) {
    SearchMovies(params: $params) {
      page
      results {
        id
        original_title
        poster_path
        release_date
        overview
        title
        vote_average
        userMovieData {
          movie
          user
          favourite
          note
          createdOn
          updatedOn
        }
      }
      total_pages
      total_result
    }
  }
`;
export const movieDetail = /* GraphQL */ `
  query MovieDetail($params: QueryMovieDetailParamsInput!) {
    MovieDetail(params: $params) {
      id
      original_title
      poster_path
      release_date
      overview
      title
      vote_average
      userMovieData {
        movie
        user
        favourite
        note
        movieData {
          id
          original_title
          poster_path
          release_date
          overview
          title
          vote_average
        }
        createdOn
        updatedOn
      }
    }
  }
`;
