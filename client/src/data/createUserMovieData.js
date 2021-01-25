export const createUserMovieDataMutation = graphql`
  mutation createUserMovieDataMutation(
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
      }
    }
  }
`;