export const userMovieDataQuery = graphql`
  query userMovieDataQuery($filter: ModelUserMovieDataFilterInput) {
    listUserMovieDatas(
      filter: $filter
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
      }
      nextToken
    }
  }
`;
