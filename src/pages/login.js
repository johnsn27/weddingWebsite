import React from 'react';
import { Authenticator, ThemeProvider, defaultTheme } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const customTheme = {
  ...defaultTheme,
  name: 'custom-theme',
  tokens: {
    colors: {
      brand: {
        primary: {
          10: '#a85c49', // Customize primary color
          80: '#5e4433',
        },
      },
    },
    components: {
      button: {
        primary: {
          backgroundColor: { value: '#a85c49' },
        },
      },
    },
  },
};

const Login = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Authenticator>
        {({ signOut, user }) => (
          <main>
            <h1>Welcome, {user.username}!</h1>
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
    </ThemeProvider>
  );
};

export default Login;
