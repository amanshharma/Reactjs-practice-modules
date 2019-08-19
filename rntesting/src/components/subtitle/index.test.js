import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import {findByTestAtrribute, checkProps} from '../../Utils';
import checkPropTypes from 'check-prop-types';

const setUp = (props) => {
  return shallow(<Headline {...props}/>);
}

describe('Headline Component', ()=> {

  describe('Check props', ()=> {
    it('Should not through a warning', ()=>{
      const expectedProps = {
        header: 'Test Header',
        desc: 'Test Desc',
        tempArr: [{
            fName: 'Test fName',
            lName: 'Test lName',
            email: 'test@email.com',
            age: 23,
            onlineStatus: false
        }]
    };
    const propsErr = checkProps(Headline.propTypes,expectedProps );
    expect(propsErr).toBeUndefined();
    })
  });

  describe('Have Props', ()=> {
    let wrapper;
    beforeEach(() => {
        const props = {
            header: 'Test Header',
            desc: 'Test Desc'
        };
        wrapper = setUp(props);
    });

    it('Should render without errors', () => {
      const component = findByTestAtrribute(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(1);
  });

  it('Should render a H1', () => {
      const h1 = findByTestAtrribute(wrapper, 'header');
      expect(h1.length).toBe(1);
  });
  });

  describe('Have no Props', ()=> {
    let wrapper;
    beforeEach(() => {
        wrapper = setUp();
    });

    it('Should not render', () => {
        const component = findByTestAtrribute(wrapper, 'HeadlineComponent');
        expect(component.length).toBe(0);
    });
  });
});