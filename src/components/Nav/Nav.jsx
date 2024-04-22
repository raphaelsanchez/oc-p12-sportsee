import { Link, NavLink } from 'react-router-dom'
import './Nav.css'
import logo from '/logo.svg'

/**
 * Renders the navigation component.
 *
 * @returns {JSX.Element} The rendered navigation component.
 */
export default function Nav() {
    return (
        <nav className="nav" aria-label="Menu principal">
            <Link className="home-link" to="/">
                <img src={logo} alt="Logo SportSee" />
            </Link>
            <ul className="menu">
                <li className="menu-item">
                    <NavLink className="menu-link" to="/">
                        Accueil
                    </NavLink>
                </li>
                <li className="menu-item">
                    <NavLink className="menu-link" to="/">
                        Profil
                    </NavLink>
                </li>
                <li className="menu-item">
                    <NavLink className="menu-link" to="/">
                        Réglages
                    </NavLink>
                </li>
                <li className="menu-item">
                    <Link className="menu-link" href="/">
                        Communauté
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
