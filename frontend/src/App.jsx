// App.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from './redux/productSlice';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import Spinner from './components/Spinner';
import ProductSkeleton from './components/ProductSkeleton';

function App() {
  const dispatch = useDispatch();
  const { items: products, status: productStatus } = useSelector((state) => state.products);

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);
if (productStatus === 'loading') {
    return (
      <div className="products-grid">
        {Array.from({ length: 10 }).map((_, i) => (
          <ProductSkeleton key={i} />
        ))}s
      </div>
    );
  }
  return (
   <div className="app">
      <Header />
      <main className="container">
        <h1 style={{ textAlign: 'center', margin: '2rem 0 0 0' }}>Products</h1>
        
        {productStatus === 'succeeded' && (
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
      <Footer />
      
    </div>
  );
}

export default App;