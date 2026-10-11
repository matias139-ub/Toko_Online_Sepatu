import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Toko Online</h2>
      <div>
        <Link to="/">Beranda</Link>
        <Link to="/products">Daftar Produk</Link>
      </div>
    </nav>
  );
};

export default Navbar;