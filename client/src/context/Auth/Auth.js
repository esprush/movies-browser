import { createContext, useContext, useEffect, useState } from "react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import { useRouter } from "next/router";
import { Auth } from "aws-amplify";
import { useHistory, useLocation } from "react-router-dom";

const UserStateContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userState, setUserState] = useState({isLoggedIn:false,userData:{}});

  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();

  const router = useRouter();
  useEffect(() => {

    
    // if (!userState || !userState.isLoggedIn) {
    //   router.push("/");
    // }
    
    onAuthUIStateChange(async (nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
      setUserState({
        isLoggedIn: nextAuthState === AuthState.SignedIn,
        userData: authData || {},
      });
      // if(nextAuthState!==AuthState.SignedIn){
      //   router.push("/");
      // }
    });
  }, []);
  
  return (
    <UserStateContext.Provider value={userState}>
      {children}
    </UserStateContext.Provider>
  );
};

export const useUserDataContext = () => useContext(UserStateContext);