const ROUTES = {
  MAIN: {
    INDEX: '/',
  },
  LOGIN: {
    INDEX: '/login',
  },
  REGISTER: {
    INDEX: '/register',
  },
  PROFILE: {
    INDEX: '/profile',
  },
  DASHBOARD: {
    INDEX: '/dashboard',
  },
  FORUM: {
    INDEX: '/forum',
  },
  FORUM_PAGE: {
    INDEX: '/forum-page',
    ID: '/forum-page/:id',
  },
  NOT_FOUND: {
    INDEX: '*',
  },
};

export default ROUTES;
