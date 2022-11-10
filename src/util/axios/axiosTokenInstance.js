import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { getFromStorage, setStorage } from '../state/storageUtil'

export const REFRESHTOKEN_THRESHOLD = 15

//let gBaseUrl =  'https://kundeportal-test.azurewebsites.net'
let gBaseUrl = window.location.protocol + '//' + window.location.hostname + ":" + window.location.port + '/'
if (process.env.NODE_ENV === 'development') {
    gBaseUrl = 'http://localhost:5000/'
}

const axiosTokenInstance = axios.create({
    baseURL: gBaseUrl,
    timeout: 60000
})

// Funksjon som sjekker om man bør fornye token
// Dvs det har mindre enn n minutter igjen av levetiden
const shouldRefreshToken = (token) => {
   
    if (token) {

        const decodedToken = jwt_decode(token)
        let expirationDateTime = new Date(0)
        expirationDateTime.setUTCSeconds(decodedToken.exp)
        
        let mustRefresh = minutesLeftOfToken(decodedToken) <= REFRESHTOKEN_THRESHOLD
        
        return mustRefresh
    }
}

const minutesLeftOfToken = (decodedToken) => {
        
    let now = new Date();

    //const token = getFromStorage('kf.token')
    //const decodedToken = jwt_decode(token)
    let expirationDateTime = new Date(0)
    expirationDateTime.setUTCSeconds(decodedToken.exp)
  
    var diff = Math.abs(now - expirationDateTime);

    var minutes = Math.round((diff / 1000) / 60);
    
    return minutes        
}

/* 
Funksjon som henter nytt token, og legger det på localstorage
*/
const refreshTokenAsync = async (token) => {
       
    let options = {
        headers: {

            'pragma':  'no-cache',
            'cache-control': 'no-cache',
            'User-Agent': 'Console app',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    };

    try {
        let res = await axios.post(
            `${gBaseUrl}api/ApiSecurity/RefreshToken`,
            '',
            options)
    
        //console.log('refreshTokenAsync OK:', JSON.stringify(res.data.token))
        let decodedToken = jwt_decode(res.data.token)
        let expirationDate = new Date(decodedToken.exp * 1000);

        setStorage('kf.token', res.data.token)
        setStorage('kf.expirationDate', expirationDate)
        
        return res.data.token;
    
    } catch (e) {
        console.log('refreshTokenAsync failed:', e.message)
        return token
    }      
}

// Interceptor som kjøres før 
axiosTokenInstance.interceptors.request.use(
    async config => {   
    
        let token = getFromStorage('kf.token')
        
        if (shouldRefreshToken(token)) {
            token = await refreshTokenAsync(token)
            console.log('Axios interceptor request, new token fetched.')
        }

        config.headers['pragma'] = 'no-cache';
        config.headers['cache-control'] = 'no-cache';

        if (token) {
            config.headers["Authorization"] = 'Bearer ' + token;
        }
        
        return config
    },
    error => {
        Promise.reject(error)
    }
)

export default axiosTokenInstance