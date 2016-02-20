//var axios = require('axios');
import axios from 'axios';

export const SELECT_IMGUR_TOPIC = 'SELECT_IMGUR_TOPIC';
export const FETCH_TOPICS = 'FETCH_TOPICS';
export const INVALIDATE_IMGUR = 'INVALIDATE_IMGUR';

export const TOPICS_GET = 'TOPICS_GET';
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



export function selectImgurTopic(imgur) {
  return {
    type: SELECT_IMGUR_TOPIC,
    imgur
  };
}

export function invalidateImgur(reddit) {
  return {
    type: INVALIDATE_IMGUR,
    reddit
  };
}

export function fetchTopics(imgur = 'reactjs') {
  return {
    type: TOPICS_GET,
    imgur,
    promise: axios(rootUrl +'topics/defaults',defaultConfig)
  }
}
