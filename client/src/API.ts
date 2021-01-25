/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserMovieDataInput = {
  movie: string,
  user: string,
  favourite?: boolean | null,
  note?: string | null,
  movieData?: MovieInput | null,
};

export type MovieInput = {
  id: string,
  original_title: string,
  poster_path?: string | null,
  release_date?: string | null,
  overview?: string | null,
  title: string,
  vote_average?: number | null,
};

export type ModelUserMovieDataConditionInput = {
  favourite?: ModelBooleanInput | null,
  note?: ModelStringInput | null,
  and?: Array< ModelUserMovieDataConditionInput | null > | null,
  or?: Array< ModelUserMovieDataConditionInput | null > | null,
  not?: ModelUserMovieDataConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateUserMovieDataInput = {
  movie: string,
  user: string,
  favourite?: boolean | null,
  note?: string | null,
  movieData?: MovieInput | null,
};

export type DeleteUserMovieDataInput = {
  user: string,
  movie: string,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelUserMovieDataFilterInput = {
  movie?: ModelStringInput | null,
  user?: ModelIDInput | null,
  favourite?: ModelBooleanInput | null,
  note?: ModelStringInput | null,
  and?: Array< ModelUserMovieDataFilterInput | null > | null,
  or?: Array< ModelUserMovieDataFilterInput | null > | null,
  not?: ModelUserMovieDataFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type QuerySearchMoviesParamsInput = {
  title: string,
};

export type QueryMovieDetailParamsInput = {
  movie: string,
};

export type CreateUserMovieDataMutationVariables = {
  input: CreateUserMovieDataInput,
  condition?: ModelUserMovieDataConditionInput | null,
};

export type CreateUserMovieDataMutation = {
  createUserMovieData:  {
    __typename: "UserMovieData",
    movie: string,
    user: string,
    favourite: boolean | null,
    note: string | null,
    movieData:  {
      __typename: "Movie",
      id: string,
      original_title: string,
      poster_path: string | null,
      release_date: string | null,
      overview: string | null,
      title: string,
      vote_average: number | null,
      userMovieData:  {
        __typename: "UserMovieData",
        movie: string,
        user: string,
        favourite: boolean | null,
        note: string | null,
        createdOn: string,
        updatedOn: string,
      } | null,
    } | null,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type UpdateUserMovieDataMutationVariables = {
  input: UpdateUserMovieDataInput,
  condition?: ModelUserMovieDataConditionInput | null,
};

export type UpdateUserMovieDataMutation = {
  updateUserMovieData:  {
    __typename: "UserMovieData",
    movie: string,
    user: string,
    favourite: boolean | null,
    note: string | null,
    movieData:  {
      __typename: "Movie",
      id: string,
      original_title: string,
      poster_path: string | null,
      release_date: string | null,
      overview: string | null,
      title: string,
      vote_average: number | null,
      userMovieData:  {
        __typename: "UserMovieData",
        movie: string,
        user: string,
        favourite: boolean | null,
        note: string | null,
        createdOn: string,
        updatedOn: string,
      } | null,
    } | null,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type DeleteUserMovieDataMutationVariables = {
  input: DeleteUserMovieDataInput,
  condition?: ModelUserMovieDataConditionInput | null,
};

export type DeleteUserMovieDataMutation = {
  deleteUserMovieData:  {
    __typename: "UserMovieData",
    movie: string,
    user: string,
    favourite: boolean | null,
    note: string | null,
    movieData:  {
      __typename: "Movie",
      id: string,
      original_title: string,
      poster_path: string | null,
      release_date: string | null,
      overview: string | null,
      title: string,
      vote_average: number | null,
      userMovieData:  {
        __typename: "UserMovieData",
        movie: string,
        user: string,
        favourite: boolean | null,
        note: string | null,
        createdOn: string,
        updatedOn: string,
      } | null,
    } | null,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type PopularMoviesQuery = {
  PopularMovies:  {
    __typename: "Response",
    page: number | null,
    results:  Array< {
      __typename: "Movie",
      id: string,
      original_title: string,
      poster_path: string | null,
      release_date: string | null,
      overview: string | null,
      title: string,
      vote_average: number | null,
      userMovieData:  {
        __typename: "UserMovieData",
        movie: string,
        user: string,
        favourite: boolean | null,
        note: string | null,
        createdOn: string,
        updatedOn: string,
      } | null,
    } | null > | null,
    total_pages: number | null,
    total_result: number | null,
  } | null,
};

export type GetUserMovieDataQueryVariables = {
  user: string,
  movie: string,
};

export type GetUserMovieDataQuery = {
  getUserMovieData:  {
    __typename: "UserMovieData",
    movie: string,
    user: string,
    favourite: boolean | null,
    note: string | null,
    movieData:  {
      __typename: "Movie",
      id: string,
      original_title: string,
      poster_path: string | null,
      release_date: string | null,
      overview: string | null,
      title: string,
      vote_average: number | null,
      userMovieData:  {
        __typename: "UserMovieData",
        movie: string,
        user: string,
        favourite: boolean | null,
        note: string | null,
        createdOn: string,
        updatedOn: string,
      } | null,
    } | null,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type ListUserMovieDatasQueryVariables = {
  user?: string | null,
  movie?: ModelStringKeyConditionInput | null,
  filter?: ModelUserMovieDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUserMovieDatasQuery = {
  listUserMovieDatas:  {
    __typename: "ModelUserMovieDataConnection",
    items:  Array< {
      __typename: "UserMovieData",
      movie: string,
      user: string,
      favourite: boolean | null,
      note: string | null,
      movieData:  {
        __typename: "Movie",
        id: string,
        original_title: string,
        poster_path: string | null,
        release_date: string | null,
        overview: string | null,
        title: string,
        vote_average: number | null,
      } | null,
      createdOn: string,
      updatedOn: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type SearchMoviesQueryVariables = {
  params: QuerySearchMoviesParamsInput,
};

export type SearchMoviesQuery = {
  SearchMovies:  {
    __typename: "Response",
    page: number | null,
    results:  Array< {
      __typename: "Movie",
      id: string,
      original_title: string,
      poster_path: string | null,
      release_date: string | null,
      overview: string | null,
      title: string,
      vote_average: number | null,
      userMovieData:  {
        __typename: "UserMovieData",
        movie: string,
        user: string,
        favourite: boolean | null,
        note: string | null,
        createdOn: string,
        updatedOn: string,
      } | null,
    } | null > | null,
    total_pages: number | null,
    total_result: number | null,
  } | null,
};

export type MovieDetailQueryVariables = {
  params: QueryMovieDetailParamsInput,
};

export type MovieDetailQuery = {
  MovieDetail:  {
    __typename: "Movie",
    id: string,
    original_title: string,
    poster_path: string | null,
    release_date: string | null,
    overview: string | null,
    title: string,
    vote_average: number | null,
    userMovieData:  {
      __typename: "UserMovieData",
      movie: string,
      user: string,
      favourite: boolean | null,
      note: string | null,
      movieData:  {
        __typename: "Movie",
        id: string,
        original_title: string,
        poster_path: string | null,
        release_date: string | null,
        overview: string | null,
        title: string,
        vote_average: number | null,
      } | null,
      createdOn: string,
      updatedOn: string,
    } | null,
  } | null,
};

export type OnCreateUserMovieDataSubscriptionVariables = {
  user: string,
};

export type OnCreateUserMovieDataSubscription = {
  onCreateUserMovieData:  {
    __typename: "UserMovieData",
    movie: string,
    user: string,
    favourite: boolean | null,
    note: string | null,
    movieData:  {
      __typename: "Movie",
      id: string,
      original_title: string,
      poster_path: string | null,
      release_date: string | null,
      overview: string | null,
      title: string,
      vote_average: number | null,
      userMovieData:  {
        __typename: "UserMovieData",
        movie: string,
        user: string,
        favourite: boolean | null,
        note: string | null,
        createdOn: string,
        updatedOn: string,
      } | null,
    } | null,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type OnUpdateUserMovieDataSubscriptionVariables = {
  user: string,
};

export type OnUpdateUserMovieDataSubscription = {
  onUpdateUserMovieData:  {
    __typename: "UserMovieData",
    movie: string,
    user: string,
    favourite: boolean | null,
    note: string | null,
    movieData:  {
      __typename: "Movie",
      id: string,
      original_title: string,
      poster_path: string | null,
      release_date: string | null,
      overview: string | null,
      title: string,
      vote_average: number | null,
      userMovieData:  {
        __typename: "UserMovieData",
        movie: string,
        user: string,
        favourite: boolean | null,
        note: string | null,
        createdOn: string,
        updatedOn: string,
      } | null,
    } | null,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type OnDeleteUserMovieDataSubscriptionVariables = {
  user: string,
};

export type OnDeleteUserMovieDataSubscription = {
  onDeleteUserMovieData:  {
    __typename: "UserMovieData",
    movie: string,
    user: string,
    favourite: boolean | null,
    note: string | null,
    movieData:  {
      __typename: "Movie",
      id: string,
      original_title: string,
      poster_path: string | null,
      release_date: string | null,
      overview: string | null,
      title: string,
      vote_average: number | null,
      userMovieData:  {
        __typename: "UserMovieData",
        movie: string,
        user: string,
        favourite: boolean | null,
        note: string | null,
        createdOn: string,
        updatedOn: string,
      } | null,
    } | null,
    createdOn: string,
    updatedOn: string,
  } | null,
};
