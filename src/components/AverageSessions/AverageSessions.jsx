import { getUserAverageSessions } from '@/api/fetchData'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import {
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts'
import './AverageSessions.css'

export default function AverageSessions({ userId = 0 }) {
    const [averageSessions, setAverageSessions] = useState({ sessions: [] })

    useEffect(() => {
        const fetchData = async () => {
            const averageSessions = await getUserAverageSessions(userId)
            setAverageSessions({
                sessions: averageSessions?.sessions,
            })
        }
        fetchData()
    }, [userId])

    // Set number of days and offset of sessions
    const offset = 0

    // Set array of days
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

    // Attibute a session length to each day
    let sessions = []
    if (averageSessions.sessions) {
        sessions = [
            { day: 'Jour précédent', ...averageSessions.sessions[0] },
            ...days.map((day, index) => ({
                ...averageSessions.sessions[index + offset],
                day: day,
            })),
            {
                day: 'Jour suivant',
                ...averageSessions.sessions[
                    averageSessions.sessions.length - 1
                ],
            },
        ]
    }

    // Calculate the time average
    const average =
        sessions.reduce((sum, session) => sum + session.sessionLength, 0) /
        sessions.length

    // Set the min and max as 60% below and above the average
    // for centering the graph and avoid overflow
    const min = average * 0.4
    const max = average * 1.6

    return (
        <section className="averageSessions">
            <h2>Durée moyenne des sessions</h2>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={sessions}
                    margin={{
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <XAxis
                        dataKey="day"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={0}
                        tick={{
                            fill: 'white',
                            fontSize: 12,
                            fontWeight: 500,
                        }}
                        padding={{ left: -20, right: -20 }}
                    />

                    <YAxis
                        hide={true}
                        domain={[`dataMin-${min}`, `dataMax+${max}`]}
                    />
                    <Tooltip
                        itemStyle={{
                            color: 'black',
                            fontSize: 11,
                            fontWeight: 500,
                        }}
                        formatter={(value, name, unit) => [value, unit]}
                        labelStyle={{ display: 'none' }}
                        cursor={{
                            stroke: 'black',
                            strokeOpacity: 0.1,
                            strokeWidth: 0,
                        }}
                        contentStyle={{
                            backgroundColor: 'white',
                            border: 'none',
                            padding: '10px',
                        }}
                    />
                    <defs>
                        <linearGradient
                            id="gradient"
                            x1="0"
                            y1="0"
                            x2="1"
                            y2="0"
                        >
                            <stop offset="0%" stopColor="#ffffff33" />
                            <stop offset="66%" stopColor="#ffffffff" />
                        </linearGradient>
                    </defs>
                    <Line
                        type="natural"
                        dataKey="sessionLength"
                        stroke="url(#gradient)"
                        dot={false}
                        strokeWidth={2}
                        unit=" min"
                    />
                </LineChart>
            </ResponsiveContainer>
        </section>
    )
}

// PropTypes definition
AverageSessions.propTypes = {
    userId: PropTypes.number.isRequired,
}
