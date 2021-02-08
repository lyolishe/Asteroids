import React from 'react';
import { Helmet, HelmetData } from 'react-helmet';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import {StaticRouterContext} from 'react-router';
import {StaticRouter} from 'react-router-dom';

function getBundle(bundleName: string) {
  return require('../../../ssr.bundles').bundles[bundleName]; // eslint-disable-line global-require
}

interface PageHtmlParams {
    bundleHtml: string;
    helmet: HelmetData;
}
// eslint-disable-next-line react/no-danger
function getPageHtml({ bundleHtml, helmet }: PageHtmlParams) {
  const html = renderToStaticMarkup(
    <html>
      <head>
        {helmet.title.toComponent()}
        {helmet.meta.toComponent()}
        {helmet.link.toComponent()}
        {helmet.script.toComponent()}

        <link rel="icon" type="image/png" href="/favicons/favicon.png" />
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: bundleHtml }} />
      </body>
    </html>,
  );

  return `<!doctype html>${html}`;
}

interface RenderBundleArguments {
    bundleName: string;
    location: string;
}

export default ({ bundleName, location }: RenderBundleArguments) => {
  const context: StaticRouterContext = {};
  const Bundle = getBundle(bundleName);

  const bundleHtml = renderToString(
    (
      <StaticRouter context={context} location={location}>
        <Bundle />
      </StaticRouter>
    ),
  );

  if (context.url) {
    // Вот и понадобился redirectUrl
    return { redirectUrl: context.url };
  }

  const helmet = Helmet.rewind();

  return {
    html: getPageHtml({ bundleHtml, helmet }),
  };
};
