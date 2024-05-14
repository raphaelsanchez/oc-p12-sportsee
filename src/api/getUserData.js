import fetchData from '../utils/fetchData'
import API_URLS from './apiUrls'
import { getMockedUserData } from './mockData'

// Set this variable to true to use mocked data
const useMockedData = import.meta.env.VITE_APP_USE_MOCKED_DATA === 'true'

/**
 * Retrieves user data from the API.
 * @param {string} id - The user ID.
 * @returns {Promise<Object>} - A promise that resolves to an object containing user data.
 */
export const getUserData = async (id) => {
    if (useMockedData) {
        return getMockedUserData(id)
    }

    const urls = [
        API_URLS.USER(id),
        API_URLS.USER_ACTIVITY(id),
        API_URLS.USER_AVERAGE_SESSIONS(id),
        API_URLS.USER_PERFORMANCE(id),
    ]

    const [userInfo, userActivity, userAverageSessions, userPerformance] =
        await Promise.all(urls.map((url) => fetchData(url)))

    // Check if the user was found
    if (!userInfo || !userInfo.data || !userInfo.data.id) {
        throw new Error('User not found')
    }

    return {
        userInfo: {
            userId: userInfo.data.id,
            userInfos: userInfo.data.userInfos,
            userKeyData: userInfo.data.keyData,
            userScore: userInfo.data.todayScore || userInfo.data.score,
        },
        userActivity: userActivity.data.sessions,
        userAverageSessions: userAverageSessions.data.sessions,
        userPerformance: {
            kind: userPerformance.data.kind,
            kindValue: userPerformance.data.data,
        },
    }
}
