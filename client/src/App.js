import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import BookList from './components/BookList';

const client = new ApolloClient({
  url: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="main">
        <h1>Test</h1>
        <BookList/>
      </div>
    </ApolloProvider>
  );
}

export default App;
