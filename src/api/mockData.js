// mockData.js
import {
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_MAIN_DATA,
    USER_PERFORMANCE,
} from '../__mock__/data'

/**
 * Retrieves mocked user data based on the provided ID.
 * @param {number} id - The ID of the user.
 * @returns {Object} - An object containing the user's information, activity, average sessions, and performance.
 * @throws {Error} - If the user with the provided ID is not found.
 */
export const getMockedUserData = (id) => {
    const userInfo = USER_MAIN_DATA.find((user) => user.id === id)
    const userActivity = USER_ACTIVITY.find((user) => user.userId === id)
    const userAverageSessions = USER_AVERAGE_SESSIONS.find(
        (user) => user.userId === id
    )
    const userPerformance = USER_PERFORMANCE.find((user) => user.userId === id)

    if (
        !userInfo ||
        !userActivity ||
        !userAverageSessions ||
        !userPerformance
    ) {
        throw new Error(`User with ID ${id} not found.`)
    }

    return {
        userInfo: {
            userId: userInfo.id,
            userInfos: userInfo.userInfos,
            userKeyData: userInfo.keyData,
            userScore: userInfo.todayScore || userInfo.score,
        },
        userActivity: userActivity.sessions,
        userAverageSessions: userAverageSessions.sessions,
        userPerformance: {
            kind: userPerformance.kind,
            kindValue: userPerformance.data,
        },
    }
}
