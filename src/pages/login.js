/** @jsxImportSource @emotion/react */
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
  const navBarHeight = '80px'; // The height of your navbar

  return (
    <ThemeProvider theme={customTheme}>
      <div css={{ paddingTop: navBarHeight }}>
        <Authenticator
          signUp={{
            formFields: {
              username: {
                labelHidden: false,
                placeholder: 'Enter your username',
              },
              password: {
                labelHidden: false,
                placeholder: 'Enter your password',
              },
              confirm_password: {
                labelHidden: false,
                placeholder: 'Confirm your password',
              },
              email: {
                labelHidden: false,
                placeholder: 'Enter your email',
              },
            },
          }}
        >
          {({ signOut, user }) => (
            <main>
              <h1>Welcome, {user.username}!</h1>
              <button onClick={signOut}>Sign out</button>
            </main>
          )}
        </Authenticator>
      </div>
    </ThemeProvider>
  );
};

export default Login;
