import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACK_END_SERVER_URL


const create = async (data) => {
    try {
        const url = `${BASE_URL}/tracks`
        const response = await axios.post(url, data)
        return response
    }
    catch (error) {
        return error
    }
}


const deleteTrack = async (id) => {
    try {
        const url = `${BASE_URL}/tracks/${id}`
        const response = await axios.delete(url)
        return response
    }
    catch (error) {
        return error
    }
}


export {
    create,
    deleteTrack
}