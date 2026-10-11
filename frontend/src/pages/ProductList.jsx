import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="container"><p>Memuat produk...</p></div>;

  return (
    <div className="container">
      <h2>Daftar Produk</h2>
      <div className="product-grid">
        {products.map(product => (
          <div key={product._id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p><strong>Rp {product.price.toLocaleString('id-ID')}</strong></p>
            <Link to={`/products/${product._id}`} style={{
              padding: '0.5rem',
              backgroundColor: '#2980b9',
              color: 'white',
              textAlign: 'center',
              borderRadius: '4px',
              textDecoration: 'none'
            }}>
              Detail Produk
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;