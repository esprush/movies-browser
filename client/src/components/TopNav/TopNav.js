import React from "react";
import styles from "./TopNav.module.css";
import Link from "next/link";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import { useUserDataContext } from "../../context/Auth/Auth";
import Search from "../Search/Search";
import { useRouter } from "next/router";
import { HOME_PAGE } from "../../constants/pages";

export default function TopNav(props) {
  const userData = useUserDataContext();
  const router=useRouter();
  return (
    <div className={styles.topNav}>
      <div className={styles.title} onClick={()=>{router.push(HOME_PAGE)}}>Movies Browser</div>
      <Search />
      <div className={styles.signout}>{userData && userData.isLoggedIn && <AmplifySignOut />}</div>
    </div>
  );
}
