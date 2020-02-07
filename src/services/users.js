import axios from "axios";

const USER_URL = 'user';
const USERS_URL = 'users';


export function getUsers(
  baseUrl,
  limit = 20,
  offset = 0,
  name = '') {

  return apiRequest(
    `${baseUrl}/${USERS_URL}`,
    {limit, offset, name});
}

export function getUser(baseUrl, id) {
  if (!id) {
    return Promise.reject(new Error('User id is not defined'));
  }
  return apiRequest(`${baseUrl}/${USER_URL}/${id}`);
}

function apiRequest(url, params, method = "GET") {
  const options = {method, params};

  return axios(url, options)
    .then(res => res.data)
    .then(data => ({data}))
}
