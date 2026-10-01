import {useState, useCallback, useEffect, type SubmitEvent} from 'react';
import useProducts from './hooks';
import './styles.css';

const ProductsPage = () => {
  const [newProductName, setNewProductName] = useState('');
  const {state, fetchProducts, createProduct} = useProducts();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleSubmit = useCallback(async (e: SubmitEvent) => {
    e.preventDefault()
    await createProduct(newProductName);
    setNewProductName('');
  }, [newProductName, setNewProductName, createProduct]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>New Product: </label>
        <input
          name='name'
          value={newProductName}
          onChange={(e) => setNewProductName(e.target.value)}
        />
        <button type='submit'> Create</button>
      </form>
      <ol>
        {state.products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ol>
    </div>
  );
};

export default ProductsPage;
