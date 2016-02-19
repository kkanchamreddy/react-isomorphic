var axios = require('axios');

export const SELECT_IMGUR = 'SELECT_IMGUR';
export const INVALIDATE_IMGUR = 'INVALIDATE_IMGUR';

export const POSTS_GET = 'POSTS_GET';
export const POSTS_GET_REQUEST = 'POSTS_GET_REQUEST';
export const POSTS_GET_SUCCESS = 'POSTS_GET_SUCCESS';
export const POSTS_GET_FAILURE = 'POSTS_GET_FAILURE';


//var rootUrl
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = 'eda005e70bf7f92';

const defaultConfig = {
  baseURL: rootUrl,
  headers: {'Authorization': 'Client-ID ' + apiKey }
};



export function selectImgur(imgur) {
  return {
    type: SELECT_IMGUR,
    imgur
  };
}

export function invalidateImgur(reddit) {
  return {
    type: INVALIDATE_IMGUR,
    reddit
  };
}

export function fetchPosts(imgur = 'reactjs') {
  return {
    type: POSTS_GET,
    imgur,
    promise: axios(`https://api.imgur.com/3/`,defaultConfig)
  }
}
