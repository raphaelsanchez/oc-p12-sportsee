import { getUserInfos } from '@/api/fetchData'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import './Header.css'

/**
 * Header component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.userId - The user ID.
 * @returns {JSX.Element} The rendered component.
 */
export default function Header({ userId }) {
    const [user, setUser] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const userData = await getUserInfos(userId)
            setUser({
                firstName: userData?.userInfos.firstName,
            })
        }
        fetchData()
    }, [userId])

    return (
        <header className="header">
            <h1>
                Bonjour <strong>{user.firstName}</strong>
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </header>
    )
}

// PropTypes definition
Header.propTypes = {
    userId: PropTypes.number.isRequired,
}
