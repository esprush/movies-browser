/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserMovieData = /* GraphQL */ `
  subscription OnCreateUserMovieData($user: String!) {
    onCreateUserMovieData(user: $user) {
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
export const onUpdateUserMovieData = /* GraphQL */ `
  subscription OnUpdateUserMovieData($user: String!) {
    onUpdateUserMovieData(user: $user) {
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
export const onDeleteUserMovieData = /* GraphQL */ `
  subscription OnDeleteUserMovieData($user: String!) {
    onDeleteUserMovieData(user: $user) {
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
