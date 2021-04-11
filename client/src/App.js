import './App.css';
// import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import ApolloClient from 'apollo-boost'
import { ApolloProvider, Query } from 'react-apollo'
import gql from 'graphql-tag'

// LEFT OFF
// --------
// #5

const client = new ApolloClient({
  uri: 'http://localhost:4000'
});

const PRODUCT_QUERY = gql` 
  query allProducts{
    products{
      id
      name
      price
    }
  }
`;

// client.query({
//   query: testQuery
// }).then(res => console.log(res))

function App() {

  return (
    <ApolloProvider client={client} >
      <div className="App">

        <Query query={PRODUCT_QUERY}>
          {({ loading, data }) => {
            if (loading) return "Loading...";
            const { products } = data;
            return products.map(product => {
              return (
                <div key={product.id}>
                  <h1>{product.name}</h1>
                  <p>{product.price}</p>
                  <hr />
                </div>
              );
            })
          }}
        </Query>
        
      </div>
    </ApolloProvider>
  );
}

export default App;
