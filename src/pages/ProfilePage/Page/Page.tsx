import React from 'react';

import PageLayout from '../../../components/PageLayout';
//import ROUTES from '../../../routes';

import ProfilePage from '../ProfilePage';

import { Props } from './types';

const Page: Props = ({
  someCustomRouteProp,
  match: { params: { id, someProp } },
}) => {
  // В зависимости от параметров можно понимать что рисовать
  // eslint-disable-next-line
    console.log(someCustomRouteProp, {params: {id, someProp}});

  return (
    <PageLayout>
      <ProfilePage />
    </PageLayout>
  );
};

Page.title = 'Profile title';
Page.id = 'profile';

export default Page;
