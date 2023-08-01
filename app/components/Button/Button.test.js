import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button.component';

test('renders correctly', () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
});