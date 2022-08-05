import Profile from '../src/Profile';
import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';

describe('[Profile] test', () => {
  const props = {
    userName: 'shs00421',
    name: '설희석',
  };

  test('checking name & userName', () => {
    const rendered = render(<Profile {...props} />);

    rendered.getByText(/shs00421/);
    rendered.getByText(/설희석/);
  });
  test('if button press', () => {
    const rendered = render(<Profile {...props} />);

    rendered.getByText('Select your status');
    const byeBtn = rendered.getByText('Bye!');
    const helloBtn = rendered.getByText('Hello!');
    fireEvent(byeBtn, 'onPress');
    rendered.getByText('Seeya!');
    fireEvent(helloBtn, 'onPress');
    rendered.getByText('Welcome!');
  });
});
