export const popularMoviesQuery = graphql`
  query pages_indexQuery {
    PopularMovies {
      page
      total_pages
      total_result
      results {
        id
        original_title
        poster_path
      }
    }
  }
`;
