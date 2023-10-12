import { PageContext } from "@yext/pages";
import { hydrateRoot } from "react-dom/client";
import { AnalyticsProvider } from "@yext/sites-components";

export { render };

const render = async (pageContext: PageContext<any>) => {
  const { Page, pageProps } = pageContext;
  const rootElement = document.getElementById("reactele");
  if (rootElement) {
    hydrateRoot(
      rootElement,
      <AnalyticsProvider templateData={pageProps} enableDebugging={true}>
        <Page {...pageProps} />
      </AnalyticsProvider>
    );
  }
};
