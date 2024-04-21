import './Header.css'

/**
 * Represents the header component.
 *
 * @returns {ReactNode} The rendered header component.
 */
const Header = () => {
    return (
        <header className="header">
            <h1>
                Bonjour <strong>Thomas</strong>
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </header>
    )
}

export default Header
