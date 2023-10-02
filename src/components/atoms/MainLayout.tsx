import Header from "./Header";
import Page from "./Page";
import Footer from "./Footer";
import Main from "../Main";
import { PropsWithChildren } from "react";
import { TemplateProps } from "@yext/pages/*";
import { AnalyticsProvider } from "@yext/sites-components";

/*
name: Blog Site Layout
description: Basic layout for pages in a blog site
*/

interface MainLayoutProps {
  footerNav?: {
    uRL: string;
    label: string;
  }[];
  headerNav?: {
    uRL: string;
    label: string;
  }[];
  logo: string;
  document: TemplateProps;
}

export const initialProps = {
  logo: "http://a.mktgcdn.com/p/86Moa_TLbLDstVl9pCx-CZwrroZevu43XtPiCZVCG3U/300x300.png",
};

const MainLayout = ({
  children,
  footerNav,
  headerNav,
  logo,
  document,
}: PropsWithChildren<MainLayoutProps>) => {
  return (
    <AnalyticsProvider templateData={{ document }} enableDebugging={true}>
      <Page>
        <Header logo={logo} navItems={headerNav} />
        <Main>{children}</Main>
        <Footer navItems={footerNav} />
      </Page>
    </AnalyticsProvider>
  );
};

export default MainLayout;
