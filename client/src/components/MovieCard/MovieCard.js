import React from "react";
import { TMDB_IMAGE_BASE_URL } from "../../constants/common";
import Image from "next/image";
import styles from "./MovieCard.module.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useUserMovieDataContext } from "../../context/UserMovieData/UserMovieData";
import { updateUserMovieDataMutation } from "../../data/updateUserMovieData";
import { createUserMovieDataMutation } from "../../data/createUserMovieData";

import { commitMutation } from "react-relay";
import environment from "../../relay/relay-environment";
import { useUserDataContext } from "../../context/Auth/Auth";
import { useRouter } from "next/router";
import { DETAIL_PAGE_PREFIX } from "../../constants/pages";
import { constructCompleteImageUrl } from "../../utils/images";
import Favourite from "../Favourite/Favourite";
export default function MovieCard(props) {
  if (!props.movie || !props.movie.id) {
    return <></>;
  }
  const movieId = props.movie.id.toString();

  const router = useRouter();
  const { updateUserMovieState } = useUserMovieDataContext();
  const userMovieData = useUserMovieDataContext().userMovieData[movieId];
  const userState = useUserDataContext();

  return (
    <>
      <div className={styles.container}>
        <div
          onClick={() => {
            router.push(DETAIL_PAGE_PREFIX + "/" + movieId);
          }}
          className={styles.pointer}
        >
          <img
            className={styles.poster}
            src={constructCompleteImageUrl(props.movie.poster_path)}
            alt={props.movie.name}
            height={250}
            width={250}
          />
        </div>
        <div className={styles.cardInfo}>
          <div className={styles.cardTitle}>{props.movie.title}</div>
          <div className={styles.cardRight}>
            <div className={styles.cardRightItems}>
              <Favourite favouriteData={{movieId,favourite:userMovieData?.favourite}}></Favourite>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
