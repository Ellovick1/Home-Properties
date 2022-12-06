import {authAxios} from './axiosInstance'
import axios from 'axios'

const loginController = async (user) => { 
    const response = await axios.post("/account/login",user)
    return response
}
const logoutController = async (user) => { 
    const response = await axios.post("/account/login",user)
    return response
}
