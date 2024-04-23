import { getUserActivity } from '@/api/fetchData'
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

export default function Activity({ userId = 0 }) {
    const [userActivity, setUserActivity] = useState({ sessions: [] })

    useEffect(() => {
        const fetchData = async () => {
            const userActivity = await getUserActivity(userId)
            setUserActivity({
                sessions: userActivity?.sessions,
            })
        }
        fetchData()
    }, [userId])

    // Set number of days and offset of sessions
    const numDays = 10
    const offset = 0

    // Set array of days
    const days = Array.from({ length: numDays }, (_, i) => i + 1)

    // Attibute a session length to each day
    const sessions = days.map((day, index) => ({
        ...userActivity.sessions[index + offset],
        day: day, // Attribution de la session au jour de la semaine
    }))

    // Legend value
    const legendValue = (value) => {
        return <span className="legend">{value}</span>
    }

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
