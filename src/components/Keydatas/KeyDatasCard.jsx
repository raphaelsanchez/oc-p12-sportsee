import PropTypes from 'prop-types'
import Icone from '../Icone/Icone'

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
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    color: PropTypes.string,
}
