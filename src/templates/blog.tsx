import "../index.css";
import {
  GetPath,
  TemplateProps,
  TemplateConfig,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";
import React from "react";
import MainLayout from "../components/MainLayout";
import BigImage from "../components/BigImage";
import ArticleContainer from "../components/ArticleContainer";
import Title from "../components/Title";
import MarkdownContent from "../components/MarkdownContent";
import HorizontalStack from "../components/HorizontalStack";
import Snippet from "../components/Snippet";
import HorizontalDivider from "../components/HorizontalDivider";
import Footer from "../components/Footer";
import Date from "../components/Date";
import ComplexHeader from "../components/ComplexHeader";
import { AnalyticsProvider } from "@yext/pages/components";

export const config: TemplateConfig = {
  stream: {
    $id: "blog",
    fields: [
      "name",
      "slug",
      "datePosted",
      "primaryPhoto",
      "blogStarter_body",
      "blogStarter_blogAuthor",
      "blogStarter_description",
      "blogStarter_metaDescription",
      "blogStarter_keywords",
    ],
    filter: {
      entityTypes: ["blogStarter_blog"],
    },
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ?? document.entityId.toString();
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = (
  data
): HeadConfig => {
  return {
    title: "Blog Home",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

export default function Blog({ document, __meta }: TemplateProps) {
  return (
    <MainLayout backgroundColor="#FFFFFF">
      <AnalyticsProvider
        templateData={{ document: document, __meta: __meta }}
        enableDebugging={true}
      >
        <ComplexHeader
          backgroundColor="#FFFFFF"
          textColor="#000000"
          logo={document._site.logo.image.url}
          link1={document._site.blogStarter_headerLinks[0].uRL}
          link2={document._site.blogStarter_headerLinks[1].uRL}
          link3={document._site.blogStarter_headerLinks[2].uRL}
          link4={document._site.blogStarter_headerLinks[3].uRL}
          label1={document._site.blogStarter_headerLinks[0].label}
          label2={document._site.blogStarter_headerLinks[1].label}
          label3={document._site.blogStarter_headerLinks[2].label}
          label4={document._site.blogStarter_headerLinks[3].label}
          companyScreenReaderText={document._site.logo.image.alternateText}
          hoverColor="light"
        />
        <ArticleContainer>
          <Title
            value={document.name}
            textSize="4xl"
            fontWeight="bold"
            topMargin="0"
            bottomMargin="0"
            textColor="#000000"
          />
          <HorizontalStack
            spacing="0"
            leftMargin="0"
            rightMargin="0"
            topMargin="2"
            bottomMargin="4"
            alignment="center"
            verticalOnMobile="false"
          >
            <Snippet
              text={document.blogStarter_blogAuthor}
              textColor="#929191"
              fontWeight="light"
              textSize="base"
            />
            <HorizontalDivider dividerHeight="4" dividerColor="#929191" />
            <Date
              textColor="#929191"
              date={document.datePosted}
              textSize="base"
              fontWeight="light"
            />
          </HorizontalStack>
          <BigImage
            src={document.primaryPhoto.image.url}
            alt={document.primaryPhoto.image.alternateText}
          />
          <MarkdownContent content={document.blogStarter_body.markdown} />
        </ArticleContainer>
        <Footer
          link1={document._site.blogStarter_footerLinks[0].uRL}
          link2={document._site.blogStarter_footerLinks[1].uRL}
          link3={document._site.blogStarter_footerLinks[2].uRL}
          link4={document._site.blogStarter_footerLinks[3].uRL}
          label1={document._site.blogStarter_footerLinks[0].label}
          label2={document._site.blogStarter_footerLinks[1].label}
          label3={document._site.blogStarter_footerLinks[2].label}
          label4={document._site.blogStarter_footerLinks[3].label}
          backgroundColor="#FFFFFF"
          textColor="#000000"
          hoverColor="light"
        />
      </AnalyticsProvider>
    </MainLayout>
  );
}
