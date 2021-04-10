import axios from 'axios';


// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl:'https://api.hnpwa.com/v0/',
}


// 2. API 함수들을 정리
async function fetchUserInfo(username) {
  try {
    const response = await axios.get(`${config.baseUrl}user/${username}.json`);
    return response;
  } catch (err) {
    console.log(err);
  }
}

async function fetchItem(id) {
  try {
    return await axios.get(`${config.baseUrl}item/${id}.json`);
  } catch (err) {
    console.log(err);
  }
}

async function fetchList(pageName) {
  try {
    return axios.get(`${config.baseUrl}${pageName}/1.json`);
  } catch(err) {
    console.log(err);
  }
}

export {
  fetchUserInfo,
  fetchItem,
  fetchList,

}