import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';

const AuthWrapper = ({ children }) => {
  return (
    <div style={{marginTop: '100px'}}>
    <Authenticator>
      {({ signOut, user }) => (
        <>
          {user ? (
            <div>
              <button onClick={signOut}>Sign Out</button>
              {children}
            </div>
          ) : null}
        </>
      )}
    </Authenticator>
    </div>
  );
};

export default AuthWrapper;
