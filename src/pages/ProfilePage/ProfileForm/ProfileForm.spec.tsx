import React from 'react';

import { render, RenderResult } from '@testing-library/react';
import ProfileForm from './ProfileForm';

let documentBody: RenderResult;

describe('<ProfileForm />', () => {
  beforeEach(() => {
    documentBody = render(<ProfileForm />);
  });

  it('matches snapshot', () => {
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
});
