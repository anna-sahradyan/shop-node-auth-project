import axios from "axios";

const BASE_URL = "http://localhost:400/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWEzNTRmMmUxN2NlNTBmNzRmYTNjYyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NjI2NjIyMDcsImV4cCI6MTY2MjkyMTQwN30.LzTWlXJFWwVH7ums5uD6FhtJKn_Ph6Ksbo6gwo_BDjE";
export const publicRequest = axios.create({
    baseURL: BASE_URL,
});
export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
});