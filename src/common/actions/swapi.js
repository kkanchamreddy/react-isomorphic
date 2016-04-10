import request from 'axios';


export const INVALIDATE_SWAPI = 'INVALIDATE_REDDIT';

export const PEOPLE_GET = 'PEOPLE_GET';
export const PEOPLE_GET_REQUEST = 'PEOPLE_GET_REQUEST';
export const PEOPLE_GET_SUCCESS = 'PEOPLE_GET_SUCCESS';
export const PEOPLE_GET_FAILURE = 'PEOPLE_GET_FAILURE';



export function invalidateSwapi(reddit) {
  return {
    type: INVALIDATE_SWAPI,
    reddit
  };
}

export function fetchPeople(swapi = 'reactjs') {
  return {
    type: PEOPLE_GET,
    swapi,
    promise: request.get(`http://swapi.co/api/people/?format=json&page=1`)
  }
}

function shouldFetchPeople(state, swapi) {
  const people = state.peopleOfSwapi[swapi];
  if (!people) {
    return true;
  } else if (people.isFetching) {
    return false;
  } else {
    return people.didInvalidate;
  }
}

export function fetchPeopleIfNeeded(swapi) {
  return (dispatch, getState) => {
    if (shouldFetchPeople(getState(), swapi)) {
      return dispatch(fetchPosts(swapi));
    }
  };
}
