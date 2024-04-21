import Icone from '@/components/Icone/Icone'
import { Link } from 'react-router-dom'
import './SideNav.css'

/**
 * Renders a side navigation bar.
 *
 * @returns {ReactNode} The rendered SideNav component.
 */
const SideNav = () => {
    return (
        <aside className="sideNav">
            <nav className="sidebar__nav" aria-label="Menu latéral">
                <ul className="menu">
                    <li className="menu-item">
                        <Link className="menu-link" href="/" aria-label="Yoga">
                            <Icone type="yoga" />
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link
                            className="menu-link"
                            href="/"
                            aria-label="Natation"
                        >
                            <Icone type="swimming" />
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link
                            className="menu-link"
                            href="/"
                            aria-label="Cyclisme"
                        >
                            <Icone type="cycling" />
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link
                            className="menu-link"
                            href="/"
                            aria-label="Fitness"
                        >
                            <Icone type="fitness" />
                        </Link>
                    </li>
                </ul>
            </nav>
            <p className="sideNav__credit">Copyright, SportSee 2020</p>
        </aside>
    )
}

export default SideNav
