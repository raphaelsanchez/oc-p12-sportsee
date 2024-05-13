import { getUserData } from '@/api/getUserData'
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
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await getUserData(userId)
                setUserData(userData)
            } catch (error) {
                console.error('Failed to fetch user informations:', error)
            }
        }
        fetchData()
    }, [userId])

    return (
        <header className="header">
            <h1>
                Bonjour{' '}
                <strong>{userData?.userInfo.userInfos.firstName}</strong>
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </header>
    )
}

// PropTypes definition
Header.propTypes = {
    userId: PropTypes.number.isRequired,
}
