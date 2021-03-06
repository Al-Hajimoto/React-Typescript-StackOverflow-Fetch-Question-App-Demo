import axios from 'axios';
import {CardDataInterface} from '../../components/data.comp.interfaces';


interface apiConfig{
    url     : string
}

const fetchAPI = async (data : apiConfig) => {
    return axios.get(data.url)
    .then(res => {
        console.log("API SUCCESS ", res);
        let respData : CardDataInterface[] = res.data.items;
        return respData;
    })
    .catch(err =>{
        console.log("GOT AN ERROR ", err);
        return [];
    });
}

export default fetchAPI;