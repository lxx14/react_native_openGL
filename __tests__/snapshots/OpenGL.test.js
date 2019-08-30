import React from 'react';
import OpenGL from '../../src/TabPages/OpenGL/OpenGL';
import renderer from 'react-test-renderer';

describe('SplashScreen', () => {
    it('create snapshot SplashScreen', () => {
        const snapshot = renderer.create(<OpenGL />);
        expect(snapshot).toMatchSnapshot();
    });
})