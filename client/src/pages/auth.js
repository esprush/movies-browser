import React from "react";

import { useRouter } from "next/router";
import { useLocation } from "react-router-dom";

export default function Auth(props) {
  const router=useRouter();

  let fragmentQueryString=router.asPath.replace(router.route+'#','');
  let queryParams=new URLSearchParams(fragmentQueryString);
  
  const saveAuthToken = () => {
    localStorage.setItem('authToken', queryParams.get("id_token"));
  };

  saveAuthToken();
  return <div>auth</div>;
}
