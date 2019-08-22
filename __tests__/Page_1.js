import 'react-native';
import React from 'react';
import Page_1 from '../src/TabPages/Page_1';

import renderer from 'react-test-renderer';

test('отображается корректно', () => {
  const tree = renderer.create(
    <Page_1 />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
