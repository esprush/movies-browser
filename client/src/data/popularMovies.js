export const popularMoviesQuery = graphql`
  query popularMoviesQuery {
    PopularMovies {
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
