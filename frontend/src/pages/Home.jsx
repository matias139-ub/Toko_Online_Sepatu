import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <h1>Selamat Datang di Toko Online Sederhana</h1>
      <p>Temukan produk terbaik dengan harga terjangkau.</p>
      <Link to="/products" style={{
        display: 'inline-block',
        marginTop: '1rem',
        padding: '0.8rem 1.5rem',
        backgroundColor: '#27ae60',
        color: 'white',
        borderRadius: '5px',
        textDecoration: 'none'
      }}>
        Lihat Semua Produk
      </Link>
    </div>
  );
};

export default Home;