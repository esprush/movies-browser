import { createContext, useContext, useEffect, useState } from "react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import { useRouter } from "next/router";
import { Auth } from "aws-amplify";
import { useHistory, useLocation } from "react-router-dom";

const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [searchText, setSearchText] = useState('');

  const updateSearchText = (searchText) => {
    setSearchText(searchText);
  };
  return (
    <SearchContext.Provider value={{ searchText, updateSearchText }}>
      {children}
    </SearchContext.Provider>
  );
};

export const searchContext = () => useContext(SearchContext);
