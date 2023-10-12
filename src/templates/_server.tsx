import * as ReactDOMServer from "react-dom/server";
import { PageContext } from "@yext/pages";
import { AnalyticsProvider } from "@yext/sites-components";

export { render };

const render = async (pageContext: PageContext<any>) => {
  const { Page, pageProps } = pageContext;
  const viewHtml = ReactDOMServer.renderToString(
    <AnalyticsProvider templateData={pageProps} enableDebugging={true}>
      <Page {...pageProps} />
    </AnalyticsProvider>
  );
  return `<!DOCTYPE html>
    <html lang="<!--app-lang-->">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div id="reactele">${viewHtml}</div>
      </body>
    </html>`;
};
