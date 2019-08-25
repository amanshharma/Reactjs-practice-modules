import {GET_POSTS} from '../actions/types';
import postReducer from './PostReducer';

describe('Posts Reducer', ()=> {
  it('Should return a default state', ()=> {
    const newState = postReducer(undefined, undefined);
    expect(newState).toEqual([]);
  });

  it('Should return a new peice of state', ()=>{
    const posts = [{title: 'one'}, {title: 'one'}, {title: 'one'}, {title: 'one'}];
    const newState = postReducer(undefined, {type: GET_POSTS, payload: posts});
    expect(newState).toEqual(posts);
  });
});
