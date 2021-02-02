import React from 'react';

import AppRoute from '../../components/AppRoute';
import ROUTES from '../../routes';

import Page from './Page';

const { PROFILE } = ROUTES;

export default [
  <AppRoute path={PROFILE.INDEX} component={Page} key={PROFILE.INDEX} exact />,
];
