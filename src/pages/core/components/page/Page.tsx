import React from 'react';

import ErrorBoundary from '@components/ErrorBoundary';

import Wrapper from '../wrapper';
import { Props } from './types';

const { __PROD__ } = process.env;

const Page: Props = () => (__PROD__
  ? (
    <ErrorBoundary>
      <Wrapper />
    </ErrorBoundary>
  )
  : <Wrapper />);
export default Page;
