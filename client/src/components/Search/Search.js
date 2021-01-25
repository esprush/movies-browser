import React, { useState } from "react";
import styles from "./Search.module.css";
import SearchIcon from "@material-ui/icons/Search";
import { searchContext } from "../../context/Search/Search";
import { useRouter } from "next/router";
import {BROWSE_PAGE} from "../../constants/pages"

let searchTimeout;
export default function Search() {
  const { searchText } = searchContext();
  const { updateSearchText } = searchContext();
  const router = useRouter();

  const handleChange = (e) => {

    updateSearchText(e.target.value);
    if(clearTimeout){
      clearTimeout(searchTimeout);
    }
    searchTimeout=setTimeout(()=>{
      router.push(BROWSE_PAGE);
    },100)
  };
  return (
    <div className={styles.wrap}>
      <div className={styles.search}>
        <input
          type="text"
          className={styles.searchTerm}
          placeholder="Instant search"
          value={searchText}
          onChange={handleChange}
        />
        <button type="submit" className={styles.searchButton}>
          <SearchIcon />
        </button>
      </div>
    </div>
  );
}
