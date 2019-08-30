import React from 'react';
import { shallow } from 'enzyme';
import SplashScreen from '../../src/SplashScreen';

describe('SplashScreen', () => {

    it('create snapshot SplashScreen', () => {

        const component = shallow(<SplashScreen />);

        expect(component).toMatchSnapshot();
    });
});