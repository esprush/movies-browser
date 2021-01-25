import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { commitMutation, fetchQuery } from "react-relay";
import { movieDetailsQuery } from "../../data/movieDetails";
import environment from "../../relay/relay-environment";
import styles from "./DetailedMovie.module.css";
import Head from "next/head";
import { constructCompleteImageUrl } from "../../utils/images";
import Favourite from "../../components/Favourite/Favourite";
import EditIcon from "@material-ui/icons/Edit";
import CheckIcon from "@material-ui/icons/Check";
import { useUserMovieDataContext } from "../../context/UserMovieData/UserMovieData";
import { useUserDataContext } from "../../context/Auth/Auth";
import { updateUserMovieDataMutation } from "../../data/updateUserMovieData";
import { createUserMovieDataMutation } from "../../data/createUserMovieData";
export default function MovieDetailPage() {
  const router = useRouter();
  const { updateUserMovieState } = useUserMovieDataContext();
  const userState = useUserDataContext();

  const [personalNote, setPersonalNote] = useState("");
  const [detailedMovieData, setDetailedMovieData] = useState({});

  let userSpecificData;

  
  const submitPersonalNote = () => {
    const updatedNote = personalNote;
    setPersonalNote(updatedNote);
    let operation;
    let responseKey;
    if (
      detailedMovieData.userMovieData &&
      detailedMovieData.userMovieData.movie
    ) {
      operation = updateUserMovieDataMutation;
      responseKey = "updateUserMovieData";
    } else {
      operation = createUserMovieDataMutation;
      responseKey = "createUserMovieData";
    }
    const input = {
      movie: detailedMovieData.id,
      note: updatedNote,
      user: userState.userData.username,
    };
    const variables = {
      input,
    };
    commitMutation(environment, {
      mutation: operation,
      variables,
      onCompleted: (response, errors) => {
        const data = response[responseKey];
        updateUserMovieState(response[responseKey]);
      },
    });
  };

  useEffect(async () => {
    if (router.query.id && !detailedMovieData.id) {
      const data = await fetchQuery(environment, movieDetailsQuery, {
        movie: router.query.id,
      });
      setDetailedMovieData(data.MovieDetail);

      if (
        data.MovieDetail &&
        data.MovieDetail.userMovieData &&
        data.MovieDetail.userMovieData.note
      ) {
        setPersonalNote(data.MovieDetail.userMovieData.note);
      }
    }
  }, [router]);

  if (!detailedMovieData.id) {
    return <></>;
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>{detailedMovieData.title}</title>
      </Head>
      <div className={styles.heading}>
        <h1>{detailedMovieData.title}</h1>
        <Favourite
          favouriteData={{
            movieId: detailedMovieData.id,
            favourite: detailedMovieData?.userMovieData?.favourite,
          }}
        ></Favourite>
      </div>
      <div className={styles.flexDiv}>
        <div className={styles.submitWrap}>
          <input
            type="text"
            className={styles.inputNote}
            placeholder="type personal note"
            value={personalNote}
            onChange={(e)=>{setPersonalNote(e.target.value)}}
          />
          <button
            type="submit"
            className={styles.searchButton}
            onClick={submitPersonalNote}
          >
            <CheckIcon />
          </button>
        </div>
      </div>

      <div className={styles.poster}>
        <div className={styles.posterImage}>
          <img
            src={constructCompleteImageUrl(detailedMovieData.poster_path)}
            alt={detailedMovieData.title}
          />
        </div>
      </div>
      <div>
        <p>{detailedMovieData.overview}</p>
      </div>
    </div>
  );
}
