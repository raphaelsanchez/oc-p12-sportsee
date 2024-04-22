import { USER_MAIN_DATA } from '../__mock__/data'

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
        // TODO: Real implementation here
    }
}
