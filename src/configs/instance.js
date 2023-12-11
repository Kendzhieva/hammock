import axios from 'axios'
import getAccessToken from 'utils/getAccessToken'

const token = getAccessToken()

export const instance = axios.create({
    baseURL: "http://localhost:4430/",
    headers: {
        'Content-Type': 'application/json'
    }
})

export const instanceWithToken = instance.create({
    headers: {
        "Authorization": `Bearer ${token}`
    }
})

