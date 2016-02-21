import {
  SELECT_IMGUR_TOPIC,
  TOPICS_GET, TOPICS_GET_REQUEST, TOPICS_GET_SUCCESS, TOPICS_GET_FAILURE
} from '../actions/imgur';

function posts(state = {
  error: {},
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {

  case TOPICS_GET_REQUEST:
    return Object.assign({}, state, {
      isFetching: true,
      didInvalidate: false
    });
  case TOPICS_GET_SUCCESS:
    return Object.assign({}, state, {
      isFetching: false,
      didInvalidate: false,
      items: action.topics,
      lastUpdated: action.receivedAt
    });
  case TOPICS_GET_FAILURE:
    return Object.assign({}, state, {
      isFetching: false,
      didInvalidate: false
    });
  default:
    return state;
  }
}


export function fetchImgurTopics(state = 'reactjs', action) {
  switch (action.type) {
  case TOPICS_GET_REQUEST:
  case TOPICS_GET_SUCCESS:
    let topicsArray = [];
    if(action.req && action.req.data){
      topicsArray = action.req.data.data;
      
      //topicsArray = data.children.map(child => child.data);
    }

    return Object.assign({}, state, {
      [action.imgur]: posts(state[action.imgur], {
        type: action.type,
        imgur: action.imgur,
        topics: topicsArray,
        receivedAt: Date.now()
      })
    });

  default:
    return state;
  }
}
