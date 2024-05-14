import Icone from '@/components/Icones/Icones'
import PropTypes from 'prop-types'

/**
 * Renders a KeyDatasCard component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the card.
 * @param {string} props.value - The value to be displayed in the card.
 * @param {string} props.color - The color of the card.
 * @param {string} props.unit - The unit of measurement for the value.
 * @returns {JSX.Element} The rendered KeyDatasCard component.
 */
export function KeyDatasCard({
    title = '',
    value = '',
    color = '',
    unit = '',
}) {
    return (
        <aside className="dataCard">
            <Icone
                className="dataCard__icon"
                title={title}
                type={title.toLowerCase()}
                color={color}
            />
            <div className="dataCard__data">
                <h3 className="dataCard__title">{title}</h3>
                <p className="dataCard__value">
                    {value}
                    {unit}
                </p>
            </div>
        </aside>
    )
}

KeyDatasCard.propTypes = {
    title: PropTypes.string,
    value: PropTypes.number,
    unit: PropTypes.string,
    color: PropTypes.string,
}
