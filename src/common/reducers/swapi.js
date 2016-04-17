import {
  INVALIDATE_SWAPI,
  PEOPLE_GET, PEOPLE_GET_REQUEST, PEOPLE_GET_SUCCESS, PEOPLE_GET_FAILURE
} from '../actions/swapi';


function people(state = {
  error: {},
  isFetching: false,
  didInvalidate: false,
  people: []
}, action) {
  switch (action.type) {
  case INVALIDATE_SWAPI:
    return Object.assign({}, state, {
      didInvalidate: true
    });
  case PEOPLE_GET_REQUEST:
    return Object.assign({}, state, {
      isFetching: true,
      didInvalidate: false
    });
  case PEOPLE_GET_SUCCESS:
    return Object.assign({}, state, {
      isFetching: false,
      didInvalidate: false,
      people: action.people,
	  count: action.count,
	  next: action.next,
      lastUpdated: action.receivedAt
    });
  case PEOPLE_GET_FAILURE:
    return Object.assign({}, state, {
      isFetching: false,
      didInvalidate: false
    });
  default:
    return state;
  }
}

export function swapiPeople(state = { }, action) {

  switch (action.type) {

  case PEOPLE_GET_SUCCESS:
    let peopleArray = []
    if(action.req && action.req.data){
      peopleArray  = action.req.data.results;
    }

    let x =  Object.assign({}, state, {
      [action.swapi]: people(state[action.swapi], {
        type: action.type,
        swapi: action.swapi,
		next: action.req.data.next,
		count: action.req.data.count,
        people: peopleArray,
        receivedAt: Date.now()
      })
    });
	return x;


  case PEOPLE_GET_FAILURE:
    return Object.assign({}, state, {
      [action.swapi]: posts(state[action.swapi], {
        type: action.type,
        swapi: action.swapi,
        people: [],
        receivedAt: Date.now(),
        error : {
          status: action.error.status,
          statusText : action.error.statusText
        }
      })
    });

  default:
    return state;
  }
}
