'use client'
import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import * as mutations from '../graphql/mutations';
// 1. Add the queries as an import
import * as queries from '../graphql/queries';

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

// const cookiesClient = generateServerClientUsingCookies({
//   config,
//   cookies
// });

// async function createTodo(formData: FormData) {
//   'use server';
//   const { data } = await cookiesClient.graphql({
//     query: mutations.createTodo,
//     variables: {
//       input: {
//         name: formData.get('name')?.toString() ?? ''
//       }
//     }
//   });

//   console.log('Created Todo: ', data?.createTodo);

//   revalidatePath('/');
// }

// export default async function Home() {
//   // 2. Fetch additional todos
//   const { data, errors } = await cookiesClient.graphql({
//     query: queries.listTodos
//   });

//   const todos = data.listTodos.items;

//   return (
//     <div
//       style={{
//         maxWidth: '500px',
//         margin: '0 auto',
//         textAlign: 'center',
//         marginTop: '100px'
//       }}
//     >
//       <form action={createTodo}>
//         <input name="name" placeholder="Add a todo" />
//         <button type="submit">Add</button>
//       </form>

//       {/* 3. Handle edge cases & zero state & error states*/}
//       {(!todos || todos.length === 0 || errors) && (
//         <div>
//           <p>No todos, please add one.</p>
//         </div>
//       )}

//       {/* 4. Display todos*/}
//       <ul>
//         {todos.map((todo) => {
//           return <li style={{ listStyle: 'none' }}>{todo.name}</li>;
//         })}
//       </ul>
//     </div>
//   );
// }