import {
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_MAIN_DATA,
} from '../__mock__/data'

// Set to true to use mocked data
const useMockedData = true

// Display a warning if the mocked data is used
if (useMockedData) {
    console.info(
        '%cUSING MOCKED DATA! Set useMockedData to false in fetchData.js to use real data.',
        'background: orange; color: black; padding: 5px 10px;'
    )
}

/**
 * Get a user by its ID.
 *
 * @param {number} id The user ID.
 * @returns {Promise<Object>} The user data.
 * @throws {Error} If the user is not found.
 */
export const getUserInfos = async (id) => {
    if (useMockedData) {
        const data = USER_MAIN_DATA.find((user) => user.id === id)

        if (!data) {
            throw new Error(`User with ID ${id} not found.`)
        }

        return {
            userId: data.id,
            userInfos: data.userInfos,
            userKeyData: data.keyData,
            userScore: data.todayScore || data.score,
        }
    } else {
        // TODO: API implementation here
    }
}

/**
 * Retrieves the user activity for the specified user ID.
 * @param {number} id - The ID of the user.
 * @returns {Promise<Object>} - A promise that resolves to an object containing the user's sessions.
 * @throws {Error} - If the user with the specified ID is not found.
 */
export const getUserActivity = async (id) => {
    if (useMockedData) {
        const data = USER_ACTIVITY.find((user) => user.userId === id)

        if (!data) {
            throw new Error(`User with ID ${id} not found.`)
        }

        return {
            sessions: data.sessions,
        }
    } else {
        // TODO: API implementation here
    }
}

/**
 * Retrieves the average sessions for a user.
 *
 * @param {string} id - The ID of the user.
 * @returns {Promise<{ sessions: number[] }>} The average sessions data for the user.
 * @throws {Error} If the user with the specified ID is not found.
 */
export const getUserAverageSessions = async (id) => {
    if (useMockedData) {
        const data = USER_AVERAGE_SESSIONS.find((user) => user.userId === id)

        if (!data) {
            throw new Error(`User with ID ${id} not found.`)
        }

        return {
            sessions: data.sessions,
        }
    } else {
        // TODO: API implementation here
    }
}
