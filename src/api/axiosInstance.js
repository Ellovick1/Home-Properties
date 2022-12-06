import axios from 'axios'
import {useAuthContext} from '../context/AuthContext'

//get token from context
console.log(useAuthContext())


//get token from local storage
let token = localStorage.getItem('token')

const accessToken = token ? JSON.parse(data) : null

console.log(accessToken)


const apiUrl = ''

export const authAxios = axios.create({
baseURL : apiUrl,
headers: { 
    Authorization:`Bearer ${accessToken}`
}
 })


