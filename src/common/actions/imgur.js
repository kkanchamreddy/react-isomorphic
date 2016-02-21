//var axios = require('axios');
import axios from 'axios';

export const SELECT_IMGUR_TOPIC = 'SELECT_IMGUR_TOPIC';
export const INVALIDATE_IMGUR = 'INVALIDATE_IMGUR';

export const TOPICS_GET = 'TOPICS_GET';
export const TOPICS_GET_REQUEST = 'TOPICS_GET_REQUEST';
export const TOPICS_GET_SUCCESS = 'TOPICS_GET_SUCCESS';
export const TOPICS_GET_FAILURE = 'TOPICS_GET_FAILURE';


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
