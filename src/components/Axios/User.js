import axios from 'axios'
const url = "http://localhost:2000/user";

export async function addUser(user){
    const response= await axios.post(`${url}/register`,user)
    return response
} 
export async function userLogin(user){
    const response = await axios.post(`${url}/login`,user)
    return response
}