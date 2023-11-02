
import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
//import ApolloProvider and ApolloClient
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

  //establish connection to graphql server
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
  });
  

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="flex-column justify-center align-center min-100-vh bg-primary">
      <Outlet />
    </div>
  </ApolloProvider>
  );
}

export default App;
