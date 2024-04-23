import { getUserInfos } from '@/api/fetchData'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import {
    PolarAngleAxis,
    RadialBar,
    RadialBarChart,
    ResponsiveContainer,
} from 'recharts'
import './Score.css'

export default function Score({ userId }) {
    const [score, setScore] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            const userData = await getUserInfos(userId)
            setScore(userData?.userScore)
        }
        fetchData()
    }, [userId])

    // Set the score value
    const scoreValue = [{ value: score * 100 }]

    // Set the new score value
    const newScore = score * 100

    return (
        <section className="score">
            <h2>Score</h2>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    data={scoreValue}
                    innerRadius={200}
                    barSize={10}
                    startAngle={90}
                    endAngle={440}
                >
                    <circle cx="50%" cy="50%" r={86} fill="white" />
                    <PolarAngleAxis
                        type="number"
                        domain={[0, 100]}
                        tick={false}
                    />
                    <RadialBar
                        dataKey="value"
                        cornerRadius={14}
                        fill={'#FF0000'}
                    />
                    <text
                        x="50%"
                        y="42%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize="26"
                        fontWeight="700"
                        fill="black"
                    >
                        {newScore}%
                    </text>
                    <text
                        x="50%"
                        y="46%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize="16"
                        fill="gray"
                        fontWeight="500"
                    >
                        <tspan x="50%" dy="1.2em">
                            de votre
                        </tspan>
                        <tspan x="50%" dy="1.2em">
                            objectif
                        </tspan>
                    </text>
                </RadialBarChart>
            </ResponsiveContainer>
        </section>
    )
}

// PropTypes definition
Score.propTypes = {
    userId: PropTypes.number.isRequired,
}
