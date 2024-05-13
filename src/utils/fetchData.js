/**
 * Fetches data from a URL.
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

export default fetchData
