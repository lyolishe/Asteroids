import { Request, Response } from 'express';

export default function renderApp(req: Request, res: Response) {
  const resHeaders = res.getHeaders();

  const {
    ip,
  } = req;

  // не разобрался как типы из @types здесь определить
  res.renderBundle('desktop', {
    ip,
    resHeaders,
  });
}
