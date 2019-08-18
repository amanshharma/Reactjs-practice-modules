import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import {findByTestAtrribute} from '../../Utils';

const setUp = (props) => {
  return shallow(<Headline {...props}/>);
}

describe('Headline Component', ()=> {
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