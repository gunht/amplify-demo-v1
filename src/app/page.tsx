'use client'
import { Amplify } from 'aws-amplify';
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from '../amplifyconfiguration.json';
Amplify.configure(config);

export function Home({ signOut, user }: WithAuthenticatorProps) {
  return (
    <div>
      <h1>Hello, {user?.username}</h1>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}

export default withAuthenticator(Home);