import { NextFunction, Request, Response } from 'express';

//import { AppData } from 'client/types/app';

import renderBundle from './bundle';

export default (req: Request, res: Response, next: NextFunction) => {
  res.renderBundle = (bundleName: string) => {
    const location = req.url;
    // TODO: langdetect
    const { html, redirectUrl } = renderBundle({ bundleName, location });

    if (redirectUrl) {
      res.redirect(redirectUrl);
      return;
    }

    res.send(html);
  };

  next();
};
