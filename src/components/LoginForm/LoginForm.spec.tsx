import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { render, RenderResult } from '@testing-library/react';
import { SnackbarProvider } from 'notistack';

import { configureStore } from '../../store/store';
import getInitialState from '../../store/getInitialState';

import LoginForm from './LoginForm';

let documentBody: RenderResult;

describe('<LoginForm />', () => {
  beforeEach(() => {
    const location = '/login';
    const { store } = configureStore(getInitialState(location), location);
    documentBody = render(
      <ReduxProvider store={store}>
        <SnackbarProvider>
          <LoginForm />
        </SnackbarProvider>
      </ReduxProvider>,
    );
  });

  it('matches snapshot', () => {
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
});
