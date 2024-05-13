import { getUserData } from '@/api/getUserData'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import {
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
    ResponsiveContainer,
} from 'recharts'
import './Performances.css'

/**
 * Renders the Performances component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {number} [props.userId=0] - The user ID.
 * @returns {JSX.Element} The Performances component.
 */
export default function Performances({ userId = 0 }) {
    const [userPerformances, setUserPerformances] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getUserData(userId)
                setUserPerformances(data.userPerformance)
            } catch (error) {
                console.error('Failed to fetch user performances:', error)
            }
        }
        fetchData()
    }, [userId])

    // Check if userPerformances[0] exists before accessing its properties
    let transformedData = []

    if (userPerformances && userPerformances.kindValue) {
        const order = {
            Intensité: 1,
            Vitesse: 2,
            Force: 3,
            Endurance: 4,
            Energie: 5,
            Cardio: 6,
        }

        const data = userPerformances.kindValue

        // Transform and sort data
        transformedData = data
            .map((item) => ({
                kind: Object.keys(order)[item.kind - 1],
                value: item.value,
            }))
            .sort((a, b) => order[a.kind] - order[b.kind])
    }

    return (
        <section className="performance">
            <h2 className="sr-only">Performances</h2>

            <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                    data={transformedData}
                    cx="50%"
                    cy="50%"
                    outerRadius="65%"
                >
                    <PolarGrid gridType="hexagon" radialLines={false} />
                    <PolarRadiusAxis
                        tick={false}
                        axisLine={false}
                        tickCount={6}
                    />
                    <PolarAngleAxis
                        dataKey="kind"
                        tickSize={10}
                        startAngle={60}
                        tick={{
                            fill: 'white',
                            fontSize: '0.65rem',
                            fontWeight: 500,
                            y: 200,
                        }}
                    />
                    <Radar
                        name="Mike"
                        dataKey="value"
                        stroke="rgba(255, 1, 1, 0.7)"
                        fill="rgba(255, 1, 1, 0.7)"
                        fillOpacity={0.6}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </section>
    )
}

// PropTypes definition
Performances.propTypes = {
    userId: PropTypes.number,
}
