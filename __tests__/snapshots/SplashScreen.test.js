import React from 'react';
import { shallow } from 'enzyme';
import OpenGL from '../../src/TabPages/OpenGL/OpenGL';

describe('OpenGL', () => {

    it('create snapshot OpenGL', () => {

        const component = shallow(<OpenGL />);

        expect(component).toMatchSnapshot();
    });
});