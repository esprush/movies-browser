import { TMDB_IMAGE_BASE_URL } from "../constants/common";

export function constructCompleteImageUrl(imagePath) {
  return TMDB_IMAGE_BASE_URL + imagePath;
}
