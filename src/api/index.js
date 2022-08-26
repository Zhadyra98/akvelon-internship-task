import axios from 'axios';

const API = axios.create({ baseURL: "https://reqres.in" })

export const signIn = (email, password ) => API.post('/api/login', {email, password});
export const signUp = (email, password ) => API.post('/api/register', {email, password});