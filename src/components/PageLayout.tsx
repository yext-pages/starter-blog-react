import Header from "./molecules/Header";
import Page from "./atoms/Page";
import Footer from "./molecules/Footer";
import Main from "./Main";
import { PropsWithChildren } from "react";
import { TemplateProps } from "@yext/pages";
import { AnalyticsProvider } from "@yext/sites-components";
import { NavItem } from "../types/autogen";

/*
name: Blog Site Layout
description: Basic layout for pages in a blog site
*/

interface PageLayoutProps {
  footerNav?: NavItem[];
  headerNav?: NavItem[];
  logo: string;
  document?: TemplateProps;
}

export const initialProps = {
  logo: "http://a.mktgcdn.com/p/86Moa_TLbLDstVl9pCx-CZwrroZevu43XtPiCZVCG3U/300x300.png",
  footerNav: [{ uRL: "#", label: "Link 1" }],
  headerNav: [{ uRL: "#", label: "Link 1" }],
};

const PageLayout = ({
  children,
  footerNav,
  headerNav,
  logo,
  document,
}: PropsWithChildren<PageLayoutProps>) => {
  return (
    <AnalyticsProvider
      templateData={document || { document: {} }}
      enableDebugging={true}
    >
      <Page>
        <Header logo={logo || ""} navItems={headerNav} />
        <Main>{children}</Main>
        <Footer navItems={footerNav} />
      </Page>
    </AnalyticsProvider>
  );
};

export default PageLayout;
