import {useCallback, useReducer} from 'react';
import axios from 'axios';
import reducer, {actionTypes} from './reducer';
import type {ReducerState} from './reducer';

const productURL = 'http://localhost:3000/api/products';

const initialState: ReducerState = {
  products: [],
};

const useProducts = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProducts = useCallback(async () => {
    try {
      const response = await axios(productURL);
      if(response.status == 200){
          dispatch({type: actionTypes.set, payload: response.data})
      }
    } catch (err) {
        console.log('error fetching products', err)
    }
  }, []);

  const createProduct = useCallback(async (name: string) => {
    try {

      const response = await axios.post(productURL, {name});
      if(response.status == 201){
        dispatch({type: actionTypes.add, payload: response.data});
      }
    } catch(err){
      console.log('error creating product', err)
    }
  }, []);

  return {
    fetchProducts,
    createProduct,
    state,
  };
};

export default useProducts;
