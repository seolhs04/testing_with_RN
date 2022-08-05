import Greeting from '../src/Greeting';
import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';

describe('Greeting render test', () => {
  const onPressMock = jest.fn();
  const props = {
    title: 'Hello!',
    onPress: onPressMock,
  };

  test('on press', () => {
    const rendered = render(<Greeting {...props} />);

    for (let i = 0; i < 5; i++) {
      fireEvent(rendered.getByText('Hello!'), 'onPress');
    }
    expect(onPressMock).toBeCalledTimes(5);
  });
});
