import './App.css';
// import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import gql from 'graphql-tag'

// LEFT OFF
// --------
// #3 Writing Our First GraphQL Query

const client = new ApolloClient({
  uri: 'localhost:4000'
});

const testQuery = gql` 
  {
    products{
      id
      name
      price
    }
  }
`;

client.query({
  query: testQuery
}).then(res => console.log(res))

function App() {

  return (
    <ApolloProvider client={client} >
      <div className="App">
        <h2>Yo Bro</h2>
      </div>
    </ApolloProvider>
  );
}

export default App;
