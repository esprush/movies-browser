/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserMovieData = /* GraphQL */ `
  mutation CreateUserMovieData(
    $input: CreateUserMovieDataInput!
    $condition: ModelUserMovieDataConditionInput
  ) {
    createUserMovieData(input: $input, condition: $condition) {
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
export const updateUserMovieData = /* GraphQL */ `
  mutation UpdateUserMovieData(
    $input: UpdateUserMovieDataInput!
    $condition: ModelUserMovieDataConditionInput
  ) {
    updateUserMovieData(input: $input, condition: $condition) {
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
export const deleteUserMovieData = /* GraphQL */ `
  mutation DeleteUserMovieData(
    $input: DeleteUserMovieDataInput!
    $condition: ModelUserMovieDataConditionInput
  ) {
    deleteUserMovieData(input: $input, condition: $condition) {
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
