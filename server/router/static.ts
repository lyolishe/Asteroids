import { Router, static as staticRoute } from 'express';

const staticRoutes = (router: Router) => {
  router
    .use('/', staticRoute('../src'))
    .use('/static', staticRoute('../static'))
    .use('/fonts', staticRoute('static/fonts'))
    .use('/favicons', staticRoute('static/favicons'))
    .use('/robots.txt', staticRoute('static/robots.txt'));
};

export default staticRoutes;
