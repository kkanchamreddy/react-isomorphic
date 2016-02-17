import request from 'axios';

export const SELECT_IMGUR = 'SELECT_IMGUR';
export const INVALIDATE_IMGUR = 'INVALIDATE_IMGUR';

export const POSTS_GET = 'POSTS_GET';
export const POSTS_GET_REQUEST = 'POSTS_GET_REQUEST';
export const POSTS_GET_SUCCESS = 'POSTS_GET_SUCCESS';
export const POSTS_GET_FAILURE = 'POSTS_GET_FAILURE';

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

export function fetchPosts(reddit = 'reactjs') {
  return {
    type: POSTS_GET,
    reddit,
    promise: request.get(`http://www.reddit.com/r/${reddit}.json`)
  }
}
