import request from 'axios';


export const INVALIDATE_SWAPI = 'INVALIDATE_SWAPI';

export const PEOPLE_GET = 'PEOPLE_GET';
export const PEOPLE_GET_REQUEST = 'PEOPLE_GET_REQUEST';
export const PEOPLE_GET_SUCCESS = 'PEOPLE_GET_SUCCESS';
export const PEOPLE_GET_FAILURE = 'PEOPLE_GET_FAILURE';



export function invalidateSwapi(swapi) {
  return {
    type: INVALIDATE_SWAPI,
    swapi
  };
}

export function fetchPeople(pgNumber=1) {

  return {
    type: PEOPLE_GET,
    pgNumber,
    promise: request.get(`http://swapi.co/api/people/?format=json&page=${pgNumber}`)
  }
}

function shouldFetchPeople(state) {
  const people = state.swapi.present.data;
  if (!people) {
    return true;
  } else if (people.isFetching) {
    return false;
  } else {
    return people.didInvalidate;
  }
}

export function fetchPeopleIfNeeded(pgNumber=1) {
  return (dispatch, getState) => {
    if (shouldFetchPeople(getState())) {
      return dispatch(fetchPeople(pgNumber));
    }
  };
}
