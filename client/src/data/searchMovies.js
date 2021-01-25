export const searchMoviesQuery = graphql`
  query searchMoviesQuery($title: String!) {
    SearchMovies(params:{title: $title}) {
      page
      total_pages
      total_result
      results {
        id
        original_title
        title
        release_date
        poster_path
        vote_average
      }
    }
  }
`;
