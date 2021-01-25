import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import Amplify, { Auth } from "aws-amplify";
import { useRouter } from "next/router";
import awsmobile from "../aws-exports";
import { UserContextProvider } from "../context/Auth/Auth";
import { UserMovieDataContextProvider } from "../context/UserMovieData/UserMovieData";
import { SearchContextProvider } from "../context/Search/Search";
import dynamic from "next/dynamic";

import "../styles/styles.css";
import TopNav from "../components/TopNav/TopNav";
Amplify.configure(awsmobile);
Auth.configure(awsmobile);
const Application = ({ Component, pageProps }) => {
  return (
    <AmplifyAuthenticator>
      <UserContextProvider>
        <SearchContextProvider>
          <UserMovieDataContextProvider>
            <TopNav />
            <Component {...pageProps} />
          </UserMovieDataContextProvider>
        </SearchContextProvider>
      </UserContextProvider>
    </AmplifyAuthenticator>
  );
};

export default dynamic(() => Promise.resolve(Application), {
  ssr: false,
});
