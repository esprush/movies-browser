import Head from "next/head";
import { useRouter } from "next/router";
import { BROWSE_PAGE, DASHBOARD_PAGE } from "../constants/pages";
import { useUserDataContext } from "../context/Auth/Auth";


const Home = () => {
  const router = useRouter();
  const userData = useUserDataContext();

  if (userData && userData.isLoggedIn) {
    router.push(DASHBOARD_PAGE);
  }
  return <></>;
};

export default Home;
