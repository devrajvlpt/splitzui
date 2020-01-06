// https://dev.to/teroauralinna/global-http-request-and-response-handling-with-the-axios-interceptor-30ae

import axios from "axios";

export const HTTP = axios.create({
    baseURL:`http://localhost:9090/`
})

const requestHandler = (request) => {
    request.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token')    
    request.headers['id'] = localStorage.getItem('user')
    return request
}

HTTP.interceptors.request.use(
    request => requestHandler(request)
  )