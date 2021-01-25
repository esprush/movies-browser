import { Auth } from "aws-amplify";
import { createContext, useContext, useEffect, useState } from "react";
import { fetchQuery } from "react-relay";
import { userMovieDataQuery } from "../../data/userMovieData";
import environment from "../../relay/relay-environment";
import { useUserDataContext } from "../Auth/Auth";

const UserMovieDataContext = createContext();

export const UserMovieDataContextProvider = ({ children }) => {
  const [userMovieData, setUserMovieData] = useState({});

  const userState = useUserDataContext();

  const updateUserMovieState = (userMovie) => {
    if (userMovie) {
      const movieId = userMovie.movie;
      const updatedMovie = {};
      updatedMovie[movieId] = userMovie;
      setUserMovieData({ ...userMovieData, [movieId]: userMovie });
    }
  };

  useEffect(async () => {
    if (userState.isLoggedIn) {
      const userMovieResponse = await fetchQuery(
        environment,
        userMovieDataQuery,
        {
          filter: {
            favourite: {
              "eq":true,
            }
          },
        }
      );

      const userMovieMap = {};

      if (userMovieResponse) {
        userMovieResponse?.listUserMovieDatas?.items?.forEach((movie) => {
          userMovieMap[movie.movie] = movie;
        });
      }
      setUserMovieData(userMovieMap);
    }
  }, [userState]);

  return (
    <UserMovieDataContext.Provider
      value={{ userMovieData, updateUserMovieState }}
    >
      {children}
    </UserMovieDataContext.Provider>
  );
};

export const useUserMovieDataContext = () => useContext(UserMovieDataContext);
