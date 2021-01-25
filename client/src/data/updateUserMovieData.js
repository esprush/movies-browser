import { updateUserMovieData } from "../graphql/mutations.ts";

export const updateUserMovieDataMutation = graphql`
  mutation updateUserMovieDataMutation(
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
      }
    }
  }
`;