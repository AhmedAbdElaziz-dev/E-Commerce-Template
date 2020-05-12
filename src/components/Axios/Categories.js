
import axios from 'axios';
const url ="http://localhost:2000/category"

export async function getAll(){
    var { data } = await axios.get(url);
    return data;
}