import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

describe('App', () => {
    test('shallow render', () => {
        const title = 'Hello';
        const wrapper = shallow(<App title={title} />);

        expect(wrapper.text()).toEqual(title);
    });
});
