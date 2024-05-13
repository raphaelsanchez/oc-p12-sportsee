// The base URL for the API
const BASE_URL = 'http://localhost:3000'

// The API endpoints
const API_URLS = {
    USER: (id) => `${BASE_URL}/user/${id}`,
    USER_ACTIVITY: (id) => `${BASE_URL}/user/${id}/activity`,
    USER_AVERAGE_SESSIONS: (id) => `${BASE_URL}/user/${id}/average-sessions`,
    USER_PERFORMANCE: (id) => `${BASE_URL}/user/${id}/performance`,
}

export default API_URLS
