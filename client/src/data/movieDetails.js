export const movieDetailsQuery = graphql`
  query movieDetailsQuery($movie:String!) {
  MovieDetail(params:{movie: $movie}) {
    id
    original_title
    overview
    poster_path
    release_date
    title
    userMovieData {
      note
      favourite
      movie
    }
  }
}
`;
