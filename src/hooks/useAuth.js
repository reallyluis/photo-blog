import { createContext, useContext, useEffect, useState } from 'react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';

const authContext = createContext();

const useAuth = () => {
  return useContext(authContext);
};

const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

const useProvideAuth = () => {
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthUIStateChange((nextAuthState, authData) => {
        setAuthState(nextAuthState);
        setUser(authData)
    });
  }, []);

  // return only 'email', 'email_verified', 'preferred_username'
  const userObj = user && user.attributes ?
    Object.keys(user.attributes)
      .filter(key => key !== 'sub')
      .reduce((obj, key) => {
        obj[key] = user.attributes[key];
        return obj;
      }, {}) :
    {};
  
  return {
    isSignedIn: authState === AuthState.SignedIn,
    user: { ...userObj },
  };
};

export {
  useAuth,
  ProvideAuth,
};
