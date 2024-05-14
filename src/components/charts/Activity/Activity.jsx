import { getUserData } from '@/api/getUserData'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts'
import './Activity.css'

/**
 * Retrieves session data for a user's activity.
 *
 * @param {Object} userActivity - The user's activity data.
 * @param {number} [numDays=10] - The number of days to retrieve session data for.
 * @param {number} [offset=0] - The offset to apply when retrieving session data.
 * @returns {Array} - An array of session data objects.
 */
function getSessionData(userActivity, numDays = 10, offset = 0) {
    // Set array of days
    const days = Array.from({ length: numDays }, (_, i) => i + 1)

    // Attribute a session length to each day
    let sessions = []
    if (userActivity.sessions && userActivity.sessions.length > 0) {
        sessions = days.map((day, index) => ({
            ...userActivity.sessions[index + offset],
            day: day, // Attribution de la session au jour de la semaine
        }))
    }

    return sessions
}

/**
 * Renders the legend value.
 * @param {string} value - The value to render.
 * @returns {JSX.Element} - The rendered legend value.
 */
const legendValue = (value) => {
    return <span className="legend">{value}</span>
}

/**
 * Renders the Activity component.
 * @param {Object} props - The component props.
 * @param {number} props.userId - The user ID.
 * @returns {JSX.Element} - The rendered component.
 */
export default function Activity({ userId = 0 }) {
    const [userActivity, setUserActivity] = useState({ sessions: [] })

    useEffect(() => {
        /**
         * Fetches user activity data.
         * @returns {Promise<void>} - A promise that resolves when the data is fetched.
         */
        const fetchData = async () => {
            try {
                const userActivity = await getUserData(userId)
                setUserActivity({
                    sessions: userActivity?.userActivity,
                })
            } catch (error) {
                console.error('Failed to fetch user activity:', error)
            }
        }
        fetchData()
    }, [userId])

    // Retrieve session data
    const sessions = getSessionData(userActivity)

    return (
        <section className="activity">
            <h2>Activité quotidienne</h2>
            <ResponsiveContainer
                width="100%"
                height="100%"
                className={'activityChart'}
            >
                <BarChart data={sessions} barGap={8} stackOffset="sign">
                    <CartesianGrid
                        strokeDasharray="2 2"
                        stroke="#DEDEDE"
                        horizontal={true}
                        vertical={false}
                    />
                    <XAxis
                        dataKey="day"
                        tick={{
                            fill: '#9699a6',
                            fontSize: '14',
                            fontWeight: 500,
                        }}
                        tickLine={false}
                        tickSize={16}
                        stroke="#DEDEDE"
                    />
                    <YAxis
                        yAxisId={0}
                        dataKey="kilogram"
                        stroke="#9699a6"
                        orientation="right"
                        axisLine={false}
                        tickLine={false}
                        width={24}
                        tick={{
                            fill: '#9699a6',
                            fontSize: '14',
                            fontWeight: 500,
                        }}
                        domain={['dataMin - 1', 'dataMax + 2']}
                    />
                    <YAxis
                        yAxisId={1}
                        dataKey="calories"
                        hide={true}
                        domain={['dataMin - 100', 'dataMax + 100']}
                    />
                    <Tooltip
                        itemStyle={{
                            color: 'white',
                            fontSize: 11,
                            fontWeight: 500,
                        }}
                        formatter={(value, name, unit) => [value, unit]}
                        labelStyle={{ display: 'none' }}
                        contentStyle={{
                            backgroundColor: '#E60000',
                            borderStyle: 'none',
                        }}
                        cursor={{ fill: 'rgba(196, 196, 196, 0.5)' }}
                    />
                    <Legend
                        layout="horizontal"
                        verticalAlign="top"
                        align="right"
                        iconType="circle"
                        iconSize={8}
                        height={47}
                        formatter={legendValue}
                    />
                    <Bar
                        yAxisId={0}
                        dataKey="kilogram"
                        barSize={8}
                        radius={[8, 8, 0, 0]}
                        unit=" kg"
                        name="Poids (kg)"
                        fill="#282D30"
                    />
                    <Bar
                        yAxisId={1}
                        dataKey="calories"
                        barSize={8}
                        radius={[8, 8, 0, 0]}
                        unit=" Kcal"
                        name="Calories brûlées (kCal)"
                        fill="#E60000"
                    />
                </BarChart>
            </ResponsiveContainer>
        </section>
    )
}

// PropTypes definition
Activity.propTypes = {
    userId: PropTypes.number.isRequired,
}
