import axios from "axios";

const BASE_URL = "http://localhost:4000/api/";
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWEzNTRmMmUxN2NlNTBmNzRmYTNjYyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NjI2NjIyMDcsImV4cCI6MTY2MjkyMTQwN30.LzTWlXJFWwVH7ums5uD6FhtJKn_Ph6Ksbo6gwo_BDjE";
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGU2OWZmNzVhZDIwN2RhYjA1Yzk2NyIsImluU3RvY2siOnRydWUsImlhdCI6MTY2MTg4OTE2OCwiZXhwIjoxNjYyMTQ4MzY4fQ.pE2y_TN-eugL1b-1vSXbNRE0VpmCl-wvC-IITbH6Vao"
export const publicRequest = axios.create({
    baseURL: BASE_URL,
});
export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
});