'use client'
import { Amplify } from 'aws-amplify';
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from '../../amplifyconfiguration.json';
Amplify.configure(config);

export function Todo() {
  return (
    <div>
      <h1>Todo List</h1>
    </div>
  );
}

export default withAuthenticator(Todo);