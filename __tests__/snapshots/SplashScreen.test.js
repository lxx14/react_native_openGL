import React from 'react';
import SplashScreen from '../../src/SplashScreen';
import renderer from 'react-test-renderer';

describe('SplashScreen', () => {
    it('create snapshot SplashScreen', () => {
        const snapshot = renderer.create(<SplashScreen />);
        expect(snapshot).toMatchSnapshot();
    });
})