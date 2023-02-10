import axios from "axios";

const TUIT_URL = 'http://localhost:4000/tuits'
export const findAllTuits = async () => {
    const response = await axios.get(TUIT_URL)
    return response.data
}
export const createTuit = async (tuitText) => {
    const response = await axios.post(TUIT_URL, {
        tuit: tuitText
    })
    return response.data
}
export const deleteTuit = async (tid) => {
    const response = await axios.delete(`${TUIT_URL}/${tid}`)
    return tid
}
export const updateTuit = async (tuitId, tuitUpdates) => {
    const response = await axios.put(
        `${TUIT_URL}/${tuitId}`,
        tuitUpdates)
    return response.data
}