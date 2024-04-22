import './Header.css'

/**
 * Represents the header component.
 *
 * @returns {JSX.Element} The rendered header component.
 */
export default function Header() {
    return (
        <header className="header">
            <h1>
                Bonjour <strong>Thomas</strong>
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </header>
    )
}
