import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      padding: '10px 20px', 
      backgroundColor: '#333' 
    }}>
      <div>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', marginRight: '15px' }}>Home</Link>
        <Link to="/about" style={{ color: 'white', textDecoration: 'none', marginRight: '15px' }}>About</Link>
        <Link to="/services" style={{ color: 'white', textDecoration: 'none', marginRight: '15px' }}>Services</Link>
        <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
