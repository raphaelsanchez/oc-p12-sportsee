import { getUserPerformance } from '@/api/fetchData'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import {
    PolarAngleAxis,
    PolarGrid,
    Radar,
    RadarChart,
    ResponsiveContainer,
} from 'recharts'
import './Performances.css'

/**
 * Performances component displays the user's performances in a radar chart.
 * @param {Object} props - The component props.
 * @param {number} props.userId - The ID of the user.
 * @returns {JSX.Element} - The rendered Performances component.
 */
export default function Performances({ userId = 0 }) {
    const [userPerformances, setUserPerformances] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const userPerformancesData = await getUserPerformance(userId)
            setUserPerformances([userPerformancesData])
        }
        fetchData()
    }, [userId])

    // Check if userPerformances[0] exists before accessing its properties
    let transformedData = []
    if (
        userPerformances &&
        userPerformances.length > 0 &&
        userPerformances[0]
    ) {
        const kind = userPerformances[0].kind
        const data = userPerformances[0].kindValue

        // Transform data
        transformedData = data.map((item) => ({
            kind: kind[item.kind],
            value: item.value,
        }))
    }

    return (
        <div className="performance">
            <h2 className="sr-only">Performances</h2>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                    data={transformedData}
                    cx="50%"
                    cy="50%"
                    outerRadius="65%"
                >
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis
                        dataKey="kind"
                        tickSize={10}
                        startAngle={90}
                        tick={{
                            fill: 'white',
                            fontSize: 12,
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
        </div>
    )
}

// PropTypes definition
Performances.propTypes = {
    userId: PropTypes.number,
}
