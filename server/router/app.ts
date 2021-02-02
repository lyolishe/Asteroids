import { ErrorRequestHandler, RequestHandler, Router } from 'express';

import { renderApp } from '../controllers';
import ROUTES from '../../src/routes';

const allRoutes = (function flatRoutes(routesMap: object): string[] {
  return Object.values(routesMap).reduce<string[]>(
    (routes, path) => routes.concat(typeof path === 'object' ? flatRoutes(path) : path),
    [],
  );
}(ROUTES));

export function appRoutes(router: Router) {
  router.get(allRoutes, [], renderApp);
}
