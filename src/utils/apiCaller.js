import * as config from './../redux/constants/config'
import axios from 'axios'
export default function callApi(endpoint, method = 'GET', body) {
   return axios ({
        method,
        url: `${config.API_URL}/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
        alert('you will recive a error')
    })
}