import {
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_MAIN_DATA,
    USER_PERFORMANCE,
} from '../__mock__/data'

// Set to true to use mocked data
const useMockedData = false

// The base URL of the API
const API_BASE_URL = 'http://localhost:3000'

// The API URLs
const API_URLS = {
    USER: (id) => `${API_BASE_URL}/user/${id}`,
    USER_ACTIVITY: (id) => `${API_BASE_URL}/user/${id}/activity`,
    USER_AVERAGE_SESSIONS: (id) =>
        `${API_BASE_URL}/user/${id}/average-sessions`,
    USER_PERFORMANCE: (id) => `${API_BASE_URL}/user/${id}/performance`,
}

// Display a warning if the mocked data is used
if (useMockedData) {
    console.info(
        '%cUSING MOCKED DATA! Set useMockedData to false in fetchData.js to use real data.',
        'background: orange; color: black; padding: 5px 10px;'
    )
}

/**
 * Fetches data from the specified URL.
 * @param {string} url - The URL to fetch data from.
 * @returns {Promise<any>} - A promise that resolves to the fetched data.
 * @throws {Error} - If there is an error while fetching the data.
 */
async function fetchData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`)
        }

        return data
    } catch (error) {
        console.error(`Failed to fetch data from ${url}:`, error)
        throw error
    }
}

/**
 * Retrieves user information.
 * @param {string} id - The ID of the user.
 * @returns {Promise<Object>} - The user information.
 * @throws {Error} - If the user with the specified ID is not found.
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
    }

    const apiData = await fetchData(API_URLS.USER(id))

    return {
        userId: apiData.data.id,
        userInfos: apiData.data.userInfos,
        userKeyData: apiData.data.keyData,
        userScore: apiData.data.todayScore || apiData.data.score,
    }
}

/**
 * Retrieves the user activity for a given user ID.
 * @param {string} id - The ID of the user.
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
    }

    const apiData = await fetchData(API_URLS.USER_ACTIVITY(id))

    if (!apiData.data) {
        throw new Error(`User with ID ${id} not found.`)
    }

    return {
        sessions: apiData.data.sessions,
    }
}

/**
 * Retrieves the average sessions for a user.
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
    }

    const apiData = await fetchData(API_URLS.USER_AVERAGE_SESSIONS(id))

    if (!apiData.data) {
        throw new Error(`User with ID ${id} not found.`)
    }

    return {
        sessions: apiData.data.sessions,
    }
}

/**
 * Retrieves the performance data for a user.
 * @param {number} id - The ID of the user.
 * @returns {Promise<{ kind: string, kindValue: any }>} The performance data for the user.
 * @throws {Error} If the user with the specified ID is not found.
 */
export const getUserPerformance = async (id) => {
    if (useMockedData) {
        const data = USER_PERFORMANCE.find((user) => user.userId === id)

        if (!data) {
            throw new Error(`User with ID ${id} not found.`)
        }

        return {
            kind: data.kind,
            kindValue: data.data,
        }
    }

    const apiData = await fetchData(API_URLS.USER_PERFORMANCE(id))

    if (!apiData.data) {
        throw new Error(`User with ID ${id} not found.`)
    }

    return {
        kind: apiData.data.kind,
        kindValue: apiData.data.data,
    }
}
