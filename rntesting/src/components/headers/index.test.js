import React from 'react';
import {shallow} from 'enzyme';
import Header from './index';

const setup = (props = {}) => {
  return shallow(<Header {...props}/>);
}

describe('Header Component', ()=> {

  let component;
  beforeEach(()=>{
    component = setup();
  });

  it('renders correctly', () => {
    const wrapper = component.find(`[data-test='brand']`);
    expect(wrapper.length).toBe(1);
  });

  it('Should render a subtitle', () => {
    const wrapper = component.find(`[data-test='subtitle']`);
    expect(wrapper.length).toBe(1);
  });
});