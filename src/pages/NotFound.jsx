import { Link } from 'react-router-dom'
import './NotFound.css'

/**
 * Renders the NotFound component.
 *
 * @returns {JSX.Element} The rendered NotFound component.
 */
export default function NotFound() {
    return (
        <main>
            <div className="notfound">
                <h1>404</h1>
                <p>La page que vous demandez ne semple pas exister...</p>
                <Link className="button" to={'/'}>
                    Revenir au profil
                </Link>
            </div>
        </main>
    )
}
