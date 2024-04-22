import { getUserInfos } from '@/api/fetchData'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import './Score.css'

export default function Score({ userId }) {
    const [score, setScore] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            const userData = await getUserInfos(userId)
            setScore(userData?.userScore)
        }
        fetchData()
    })

    return (
        <section className="score">
            <h2>Score</h2>
            <strong>{score && score * 100}%</strong> de votre objectif
        </section>
    )
}

// PropTypes definition
Score.propTypes = {
    userId: PropTypes.number.isRequired,
}
