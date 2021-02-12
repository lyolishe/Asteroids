import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch } from 'react-router';

import PageLayout from '@components/PageLayout';
import ProfilePage from '../../../ProfilePage/routing';

const Wrapper = () => (
  <>
    <Helmet>
      <title>Asteroids</title>
      <meta name="title" content="ssr" />
    </Helmet>

    <PageLayout>
      <Switch>
        {ProfilePage}
      </Switch>
    </PageLayout>
  </>
);
export default Wrapper;
