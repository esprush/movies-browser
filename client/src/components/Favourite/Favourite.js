import React, { useState } from "react";
import { commitMutation } from "react-relay";
import { useUserMovieDataContext } from "../../context/UserMovieData/UserMovieData";
import { useUserDataContext } from "../../context/Auth/Auth";
import environment from "../../relay/relay-environment";
import styles from "./Favourite.module.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { updateUserMovieDataMutation } from "../../data/updateUserMovieData";
import { createUserMovieDataMutation } from "../../data/createUserMovieData";
export default function Favourite(props) {
  const [favourite, setFavourite] = useState(props.favouriteData.favourite);
  const { movieId } = props.favouriteData;
  const userState = useUserDataContext();


  const userMovieData=useUserMovieDataContext()[movieId];
  const { updateUserMovieState } = useUserMovieDataContext();

  const updateFavourite = () => {
    const updatedFavourite = !favourite;
    let operation;
    let responseKey;
    if (userMovieData && userMovieData.movie) {
      operation = updateUserMovieDataMutation;
      responseKey = "updateUserMovieData";
    } else {
      operation = createUserMovieDataMutation;
      responseKey = "createUserMovieData";
    }
    const input = {
      movie: movieId,
      favourite: updatedFavourite,
      user: userState.userData.username,
    };
    const variables = {
      input,
    };
    commitMutation(environment, {
      mutation: operation,
      variables,
      onCompleted: (response, errors) => {
        updateUserMovieState(response[responseKey]);
        setFavourite(response[responseKey].favourite);
      },
    });
  };

  return (
    <div
      className={styles.pointer}
      onClick={() => {
        updateFavourite();
      }}
    >
      {favourite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </div>
  );
}
