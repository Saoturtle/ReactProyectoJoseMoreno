import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="https://t3.ftcdn.net/jpg/03/61/20/08/360_F_361200888_bNdLE2Ip22BeTsUXn96jBo1bTyXMgj07.jpg" alt="Logo" />
            </div>
            <ul className="navbar-links">
                <li><a href="/#">Home</a></li>
                <li><a href="/#">Consolas</a></li>
                <li><a href="/#">Juegos</a></li>
                <li><a href="/#">Accesorios</a></li>
            </ul>
            <div className="navbar-cart">
                <CartWidget />
            </div>
        </nav>
    );
}

export default Navbar;
