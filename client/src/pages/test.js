import React from 'react';
//import './App.css';
import Amplify from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import {amplifyConfig} from '../aws-exports';

Amplify.configure(amplifyConfig);

const AuthStateApp = () => {
    const [authState, setAuthState] = React.useState();
    const [user, setUser] = React.useState();

    React.useEffect(() => {
        onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData)
        });
    }, []);

  return authState === AuthState.SignedIn && user ? (
      <div className="App">
          <div>Hello, {JSON.stringify(user.attributes.email)}</div>
          <AmplifySignOut />
      </div>
    ) : (
      <AmplifyAuthenticator />
  );
}

export default AuthStateApp;