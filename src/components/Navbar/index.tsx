import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
    return (
        <div className="container-fluid px-0 py-2 primary-bg-color" id="navbar-container">
            <div className="container">
                <Link to="/">Github API</Link>
            </div>
        </div>
    );
}

export default Navbar;
