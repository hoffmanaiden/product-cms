import React, {useState} from 'react';
import {
  ApolloClient,
  InMemoryCache,
  useQuery,
  gql
} from '@apollo/client';

// const CREATE_PRODUCT_MUTA = gql`
//   mutation addProduct()
// `


function AddProduct(){
  const [input, setInput] = useState({})

  function onInput(e){
    return setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value
    })
  }
  function onSubmit(e){
    e.preventDefault();
    console.log(input)
  }

  return(
    <form className="AddProduct" onSubmit={onSubmit}>
      <input type="text" name="name" placeholder="name" onChange={onInput}/>
      <input type="text" name="price" placeholder="price" onChange={onInput}/>
      <button>submit</button>
    </form>
  )
}

export default AddProduct;