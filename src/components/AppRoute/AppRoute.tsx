import React from 'react';
import { Route, RouteComponentProps } from 'react-router';

import ErrorBoundary from '../ErrorBoundary';

import { Props } from './types';

const AppRoute = ({ componentProps, component, ...props }: Props) : JSX.Element => {
  const Component = component as any;
  const renderContent = (routerProps: RouteComponentProps) => (
    <ErrorBoundary>
      <Component {...routerProps} {...componentProps} />
    </ErrorBoundary>
  );

  return (
    <Route
      {...props}
      render={renderContent}
    />
  );
};

export default AppRoute;
