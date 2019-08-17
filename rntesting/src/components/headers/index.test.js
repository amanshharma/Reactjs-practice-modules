import React from 'react';
import {shallow} from 'enzyme';
import Header from './index';
import {findByTestAtrribute} from '../../../src/Utils';

const setup = (props = {}) => {
  return shallow(<Header {...props}/>);
}

describe('Header Component', ()=> {

  let component;
  beforeEach(()=>{
    component = setup();
  });

  it('renders correctly', () => {
    const wrapper = findByTestAtrribute(component, 'brand')
    expect(wrapper.length).toBe(1);
  });

  it('Should render a subtitle', () => {
    const wrapper = findByTestAtrribute(component, 'subtitle')  
    expect(wrapper.length).toBe(1);
  });
});