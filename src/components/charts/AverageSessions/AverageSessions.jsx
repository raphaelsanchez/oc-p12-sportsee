import { getUserData } from '@/api/getUserData'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import {
    Line,
    LineChart,
    Rectangle,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts'
import './AverageSessions.css'

/**
 * CustomizedTooltip component.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.active - Indicates if the tooltip is active.
 * @param {Array} props.payload - The data payload for the tooltip.
 * @returns {JSX.Element|null} The rendered CustomizedTooltip component.
 */
function CustomizedTooltip({ active, payload }) {
    if (active && payload) {
        return (
            <div className="custom-tooltip">
                <p>{`${payload[0].value}`} min</p>
            </div>
        )
    }
    return null
}
CustomizedTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
}

/**
 * Renders a customized cursor component.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.points - The array of points.
 * @returns {JSX.Element} The customized cursor component.
 */
function CustomizedCursor({ points }) {
    return (
        <Rectangle
            fill="black"
            opacity={0.1}
            x={points[1].x}
            width={500}
            height={500}
        />
    )
}
CustomizedCursor.propTypes = {
    points: PropTypes.array,
}

/**
 * Renders an active dot component.
 * @param {Object} props - The component props.
 * @param {number} props.cx - The x-coordinate of the center of the circle.
 * @param {number} props.cy - The y-coordinate of the center of the circle.
 * @param {string} props.stroke - The color of the circle's stroke.
 * @returns {JSX.Element} The rendered active dot component.
 */
const ActiveDot = ({ cx, cy, stroke }) => {
    return (
        <g>
            <circle cx={cx} cy={cy} r={10} fill="white" fillOpacity={0.3} />
            <circle
                cx={cx}
                cy={cy}
                r={4}
                stroke={stroke}
                strokeWidth={2}
                fill="white"
            />
        </g>
    )
}
ActiveDot.propTypes = {
    cx: PropTypes.number,
    cy: PropTypes.number,
    stroke: PropTypes.string,
}

/**
 * Renders the AverageSessions component.
 * @param {Object} props - The component props.
 * @param {number} props.userId - The user ID.
 * @returns {JSX.Element} The rendered AverageSessions component.
 */
export default function AverageSessions({ userId = 0 }) {
    const [userAverageSessions, setUserAverageSessions] = useState({
        sessions: [],
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getUserData(userId)
                setUserAverageSessions({
                    sessions: data?.userAverageSessions,
                })
            } catch (error) {
                console.error('Failed to fetch user average sessions:', error)
            }
        }
        fetchData()
    }, [userId])

    // format the x-axis labels to display the first letter of the day
    const xAxisFormatter = (day) => {
        switch (day) {
            case 1:
                return 'L'
            case 2:
                return 'M'
            case 3:
                return 'M'
            case 4:
                return 'J'
            case 5:
                return 'V'
            case 6:
                return 'S'
            case 7:
                return 'D'
            default:
                return ''
        }
    }

    // Attibute a session length to each day
    let sessions = userAverageSessions.sessions.map((session) => {
        return {
            day: session.day,
            sessionLength: session.sessionLength,
        }
    })

    // Add an additional data at the beginning and at the end to make the graph line overflow
    if (sessions && sessions.length > 0) {
        const firstSession = { ...sessions[0] }
        firstSession.day -= 1
        sessions.unshift(firstSession)
        const lastSession = { ...sessions[sessions.length - 1] }
        lastSession.day += 1
        sessions.push(lastSession)
    }

    // Calculate the session average
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
                        right: -10,
                        left: -10,
                        bottom: 10,
                    }}
                >
                    <XAxis
                        dy={9}
                        dataKey="day"
                        tickFormatter={xAxisFormatter}
                        tickLine={false}
                        axisLine={false}
                        tick={{
                            fill: 'white',
                            fontSize: 12,
                            fontWeight: 500,
                        }}
                        // tickMargin={-10}
                    />

                    <YAxis
                        hide={true}
                        domain={[`dataMin-${min}`, `dataMax+${max}`]}
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
                        dot={false}
                        strokeWidth={2}
                        unit=" min"
                        style={{ stroke: 'url(#gradient)' }}
                        activeDot={<ActiveDot />}
                    />

                    <Tooltip
                        className="custom-tooltip"
                        content={<CustomizedTooltip />}
                        cursor={<CustomizedCursor />}
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
