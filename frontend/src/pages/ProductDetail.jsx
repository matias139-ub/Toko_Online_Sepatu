import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(response => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching detail:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="container"><p>Memuat detail produk...</p></div>;
  if (!product) return <div className="container"><p>Produk tidak ditemukan.</p></div>;

  return (
    <div className="container">
      <Link to="/products">&larr; Kembali ke Daftar Produk</Link>
      <div className="detail-container" style={{ marginTop: '1rem' }}>
        <img src={product.image} alt={product.name} />
        <div>
          <h2>{product.name}</h2>
          <h3>Rp {product.price.toLocaleString('id-ID')}</h3>
          <p><strong>Kategori:</strong> {product.category}</p>
          <p><strong>Stok:</strong> {product.stock}</p>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;