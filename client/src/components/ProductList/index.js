import './ProductList.css';
import {
  ApolloClient,
  InMemoryCache,
  useQuery,
  gql
} from '@apollo/client';

const PRODUCT_QUERY = gql` 
query allProducts{
  products{
    id
    name
    price
  }
}
`;

function ProductList() {
  const { loading, error, data } = useQuery(PRODUCT_QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...¯\_(ツ)_/¯</p>
  return (
    <div className='ProductList'>
      {/* GREAT EXPORT MODULE CANADATE */}
      {data.products.map(product => {
        return (
          <div key={product.id}>
            <h1>{product.name}</h1>
            <p>{product.price}</p>
            <hr />
          </div>
        );
      })}
    </div>
  )
}

export default ProductList;