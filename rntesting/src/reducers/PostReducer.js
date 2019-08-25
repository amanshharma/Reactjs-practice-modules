import {GET_POSTS} from '../actions/types';

export default (state=[], actions) => {
  switch((actions || {}).type){
    case GET_POSTS: return actions.payload; break;
    default: return state;
  }
}